import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const UserProfile = () => {
    const [postedProducts, setPostedProducts] = useState([]);
    const [bids, setBids] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response1 = await axios.get("http://localhost:5000/api/users/posted-products");
                const response2 = await axios.get("http://localhost:5000/api/users/bids");
                setPostedProducts(response1.data);
                setBids(response2.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4">Your Profile</h1>

            <h2 className="text-xl font-semibold mb-2">Your Posted Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {postedProducts.length > 0 ? (
                    postedProducts.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))
                ) : (
                    <p>You have not posted any products yet.</p>
                )}
            </div>

            <h2 className="text-xl font-semibold mt-6 mb-2">Your Bids</h2>
            <ul>
                {bids.length > 0 ? (
                    bids.map((bid) => (
                        <li key={bid._id}>
                            You bid ${bid.amount} on <strong>{bid.product.title}</strong>
                        </li>
                    ))
                ) : (
                    <p>You have not placed any bids yet.</p>
                )}
            </ul>
        </div>
    );
};

export default UserProfile;
