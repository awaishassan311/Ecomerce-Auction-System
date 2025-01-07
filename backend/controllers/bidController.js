const Bid = require("../models/Bid");
const Product = require("../models/Product");

exports.placeBid = async (req, res) => {
    try {
        const { productId, amount } = req.body;
        const product = await Product.findById(productId);

        if (!product) return res.status(404).json({ error: "Product not found" });
        if (amount <= product.currentPrice) return res.status(400).json({ error: "Bid must be higher" });

        const newBid = new Bid({ user: req.userId, product: productId, amount });
        await newBid.save();

        product.currentPrice = amount;
        product.bids.push({ user: req.userId, amount });
        await product.save();

        res.status(201).json({ message: "Bid placed successfully", product });
    } catch (error) {
        console.error("Error placing bid:", error); // Log the error
        res.status(500).json({ error: "Failed to place bid" });
    }
};
