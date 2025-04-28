import React from 'react';
import TourCard from './TourCard';

// Static list of tours to display in the gallery
const tours = [
    {
        id: 1,
        title: 'Paris Tour', // Title of the tour
        description: 'Explore the city of lights.', // Short description of the tour
        comments: ['Amazing experience!', 'Loved the Eiffel Tower!'] // User comments about the tour
    },
    {
        id: 2,
        title: 'Rome Tour', // Title of the tour
        description: 'Discover the ancient city.', // Short description of the tour
        comments: ['The Colosseum was breathtaking.', 'Great food and history!'] // User comments about the tour
    },
    {
        id: 3,
        title: 'Tokyo Tour', // Title of the tour
        description: 'Experience the vibrant culture.', // Short description of the tour
        comments: ['The cherry blossoms were beautiful.', 'Loved the sushi!'] // User comments about the tour
    }
];

// Gallery component to display a list of tours
const Gallery = () => {
    return (
        <div className="gallery">
            {/* Map over the tours array and render a TourCard for each tour */}
            {tours.map((tour) => (
                <TourCard 
                    key={tour.id} // Unique key for each tour
                    title={tour.title} // Pass the title as a prop
                    description={tour.description} // Pass the description as a prop
                    comments={tour.comments} // Pass the comments as a prop
                />
            ))}
        </div>
    );
};

export default Gallery;