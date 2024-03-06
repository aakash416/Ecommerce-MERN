import React from "react";
import { viewAllSellers } from "../../../api/admin";
import TableBody from "../components/TableBody";
import userNotFound from "../../../assets/userNotFound.png";

// Extracted reusable API call
async function fetchSeller() {
  try {
    const response = await viewAllSellers();
    return response.sellers;
  } catch (error) {
    throw error;
  }
}

const AllSeller = () => {
  const [loading, setLoading] = React.useState(false);
  const [sellers, setSellers] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const sellers = await fetchSeller();
        setSellers(sellers);
      } catch (err) {
        setError(err?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="d-flex align-items-center">
        <strong role="status">Loading...</strong>
        <div className="spinner-border ms-auto" aria-hidden="true"></div>
      </div>
    );
  } else if (error) {
    return <p>{error}</p>;
  } else {
    return (
      <>
        {sellers?.length !== 0 ? (
          <>
            <div>
              <table className="table">
                <thead>
                  <tr>
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
                  {sellers.map((seller, index) => (
                    <TableBody key={index} data={seller} index={index} />
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            <div className="card text-center mt-5">
              <div className="card-body">
                <img
                  className="m-2"
                  src={userNotFound}
                  alt="sellerNotFound"
                  style={{ width: "300px" }}
                />
                <h5 className="card-title">Seller not found</h5>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
};

export default AllSeller;
