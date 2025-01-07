import  { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import ProductGrid from "../components/ProductGrid";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/products");
                setProducts(response.data);
            } catch (err) {
                console.error("Error fetching products:", err); // Log the error
                setError("Failed to load products. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
    
        fetchProducts();
    }, []);
    
    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold mb-4">Active Auctions</h1>

            {loading && <p>Loading products...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <ProductGrid />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))
                ) : (
                    !loading && <p>No active auctions available at the moment.</p>
                )}
            </div>
        </div>
    );
};

export default Home;
