import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Timer from "../components/Timer";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [bidAmount, setBidAmount] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`).then((res) => {
            setProduct(res.data);
        });
    }, [id]);

    const handleBid = () => {
        axios.post("http://localhost:5000/api/bids", { productId: id, bidAmount }).then((res) => {
            alert("Bid placed successfully!");
            setProduct(res.data.product);
        });
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p>{product.description}</p>
            <p>
                Current Price: <strong>${product.currentPrice}</strong>
            </p>
            <Timer endTime={product.endTime} />
            <div className="mt-5">
                <input
                    type="number"
                    placeholder="Enter your bid"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    className="border p-2 rounded mr-2"
                />
                <button
                    onClick={handleBid}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Place Bid
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;
