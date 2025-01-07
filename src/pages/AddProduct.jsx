import  { useState } from "react";
import axios from "axios";

const AddProduct = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        startingPrice: "",
        endTime: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/products/add", formData);
            alert("Product added successfully!");
            setFormData({ title: "", description: "", startingPrice: "", endTime: "" });
        } catch {
           
            alert("Failed to add product. Please try again.");
        }
    };
    

    return (
        <form onSubmit={handleSubmit} className="p-5 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4">Add Product</h1>
            <input
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full border p-2 mb-4"
                required
            />
            <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full border p-2 mb-4"
                required
            />
            <input
                type="number"
                placeholder="Starting Price"
                value={formData.startingPrice}
                onChange={(e) => setFormData({ ...formData, startingPrice: e.target.value })}
                className="w-full border p-2 mb-4"
                required
            />
            <input
                type="datetime-local"
                placeholder="End Time"
                value={formData.endTime}
                onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                className="w-full border p-2 mb-4"
                required
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Add Product
            </button>
        </form>
    );
};

export default AddProduct;
