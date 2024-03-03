import React from 'react';
import { viewAllUsers } from '../../../api/admin';
import TableBody from '../components/TableBody';

// Extracted reusable API call
async function fetchUsers() {
    try {
        const response = await viewAllUsers();
        return response.users;
    } catch (error) {
        throw error;
    }
}

const AllUsers = () => {

    const [loading, setLoading] = React.useState(false);
    const [users, setUsers] = React.useState([]);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true);
                const user = await fetchUsers();
                setUsers(user);
            } catch (err) {
                setError(err?.response?.data?.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (<div className="d-flex align-items-center">
            <strong role="status">Loading...</strong>
            <div className="spinner-border ms-auto" aria-hidden="true"></div>
        </div>);
    } else if (error) {
        return (<p>{error}</p>);
    } else {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr >
                            <th scope="col">S.N.</th>
                            <th scope="col"></th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Address</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">

                        {users.map((user, index) => <TableBody key={index} data={user} index={index} />)}

                    </tbody>
                </table>

            </div>
        );
    }
};



export default AllUsers;