import React, { useState } from 'react';

// TourCard component to display individual tour details
const TourCard = ({ id, name, info, image, price, onRemove }) => {
    // State to toggle between showing full info or a truncated version
    const [readMore, setReadMore] = useState(false);

    return (
        <div className="tour-card">
            {/* Display the tour image */}
            <img src={image} alt={name} className="tour-image" />
            <div className="tour-details">
                {/* Display the tour name */}
                <h2 className="tour-name">{name}</h2>
                {/* Display the tour price */}
                <p className="tour-price">${price}</p>
                {/* Display the tour info with a "Read More" toggle */}
                <p className="tour-info">
                    {readMore ? info : `${info.substring(0, 100)}...`}
                    <button onClick={() => setReadMore(!readMore)} className="read-more-btn">
                        {readMore ? 'Show Less' : 'Read More'}
                    </button>
                </p>
                {/* Button to remove the tour */}
                <button onClick={() => onRemove(id)} className="not-interested-btn">
                    Not Interested
                </button>
            </div>
        </div>
    );
};

export default TourCard;