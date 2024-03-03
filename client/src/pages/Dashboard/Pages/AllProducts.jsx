import React from 'react';
import { getAllProduct } from '../../../api';
import ProductTableBody from '../components/ProductTableBody';

// Extracted reusable API call
async function fetchSeller() {
    try {
        const response = await getAllProduct();
        return response?.data?.products;
    } catch (error) {
        throw error;
    }
}

const AllProducts = () => {

    const [loading, setLoading] = React.useState(false);
    const [products, setProducts] = React.useState([]);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true);
                const products = await fetchSeller();
                setProducts(products);
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
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">CountInStock</th>
                            <th scope="col">status</th>
                            <th scope="col">isApproved</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {products.map((product, index) => <ProductTableBody key={index} data={product} index={index} />)}
                    </tbody>
                </table>

            </div >
        );
    }
};



export default AllProducts;