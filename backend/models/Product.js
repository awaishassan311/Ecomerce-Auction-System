const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    startingPrice: { type: Number, required: true },
    currentPrice: { type: Number },
    imageSrc: { type: String, default: "" },
    imageAlt: { type: String, default: "" },
    color: { type: String },
    endTime: { type: Date, required: true },
    bids: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            amount: { type: Number },
            timestamp: { type: Date, default: Date.now },
        },
    ],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Product", ProductSchema);
