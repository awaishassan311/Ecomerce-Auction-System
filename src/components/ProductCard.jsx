
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
    const remainingTime = Math.max(
        (new Date(product.endTime) - new Date()) / 1000,
        0
    );

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = Math.floor(time % 60);
        return `${hours}h ${minutes}m ${seconds}s`;
    };

    return (
        <div className="border rounded-lg shadow-md p-4 bg-white">
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="mt-2 text-gray-800">
                Current Price: <strong>${product.currentPrice}</strong>
            </p>
            <p className="text-red-600">Ends in: {formatTime(remainingTime)}</p>
            <Link
                to={`/product/${product._id}`}
                className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                View Details
            </Link>
        </div>
    );
};

// Add PropTypes validation
ProductCard.propTypes = {
    product: PropTypes.shape({
        _id: PropTypes.string.isRequired, // Ensure product has an _id and it's a string
        title: PropTypes.string.isRequired, // Ensure product has a title and it's a string
        description: PropTypes.string.isRequired, // Ensure product has a description and it's a string
        currentPrice: PropTypes.number.isRequired, // Ensure product has a currentPrice and it's a number
        endTime: PropTypes.string.isRequired, // Ensure product has an endTime and it's a string (ISO format date)
    }).isRequired,
};

export default ProductCard;
