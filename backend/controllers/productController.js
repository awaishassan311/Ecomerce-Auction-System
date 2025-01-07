const Product = require("../models/Product");
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error); // Log the error
        res.status(500).json({ error: "Failed to fetch products" });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        console.error("Error fetching product by ID:", error); // Log the error
        res.status(500).json({ error: "Product not found" });
    }
};

exports.addProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.error("Error adding product:", error); // Log the error
        res.status(500).json({ error: "Failed to add product" });
    }
};
