require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");
const errorHandler = require("./utils/errorHandler");

const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const bidRoutes = require("./routes/bidRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/bids", bidRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
