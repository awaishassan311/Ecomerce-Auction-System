import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Timer = ({ endTime }) => {
    const [timeLeft, setTimeLeft] = useState(
        Math.max(new Date(endTime) - new Date(), 0)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => Math.max(prevTime - 1000, 0));
        }, 1000);
        return () => clearInterval(interval);
    }, [endTime]);

    const formatTime = (time) => {
        const hours = Math.floor(time / (1000 * 60 * 60));
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);
        return `${hours}h ${minutes}m ${seconds}s`;
    };

    return (
        <div className="text-red-500 font-bold">
            {timeLeft > 0 ? `Time Left: ${formatTime(timeLeft)}` : "Auction Ended"}
        </div>
    );
};

// Add PropTypes validation
Timer.propTypes = {
    endTime: PropTypes.string.isRequired, // Ensure endTime is a required string (ISO date format)
};

export default Timer;
