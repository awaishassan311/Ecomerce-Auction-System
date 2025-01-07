const express = require("express");
const { getAllProducts, getProductById, addProduct } = require("../controllers/productController");
const router = express.Router();

// Dummy products data
const dummyProducts = [
    {
        id: 1,
        name: "Zip Tote Basket",
        color: "White and black",
        href: "#",
        imageSrc: "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-related-product-01.jpg",
        imageAlt: "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
        price: "$140",
    },
    {
        id: 2,
        name: "Leather Wallet",
        color: "Brown",
        href: "#",
        imageSrc: "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-related-product-02.jpg",
        imageAlt: "Front of a leather wallet with stitching details.",
        price: "$80",
    },
    // Add more products if needed...
];

// Route for fetching dummy products
router.get("/dummy-products", (req, res) => {
    res.json(dummyProducts);
});

// Existing routes
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/add", addProduct);

module.exports = router;
