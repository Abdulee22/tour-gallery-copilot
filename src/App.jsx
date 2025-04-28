import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // State to store the list of tours
  const [tours, setTours] = useState([]);
  // State to manage the loading state
  const [loading, setLoading] = useState(true);
  // State to handle errors during data fetching
  const [error, setError] = useState(null);

  // Fetch tours from the API when the component mounts
  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const response = await fetch('https://course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours'); // Handle HTTP errors
        }
        const data = await response.json();
        setTours(data); // Update the tours state with fetched data
        setError(null); // Clear any previous errors
      } catch (err) {
        setError(err.message); // Set the error message if fetching fails
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchTours();
  }, []); // Empty dependency array ensures this runs only once

  // Function to remove a tour from the list
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id)); // Filter out the tour with the given ID
  };

  // Render a loading message while data is being fetched
  if (loading) {
    return <h1>Loading...</h1>;
  }

  // Render an error message if there was an issue fetching data
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className="App">
      <h1>Tour Gallery</h1>
      {/* Display a message if no tours are left */}
      {tours.length === 0 ? (
        <h2>No tours left</h2>
      ) : (
        <div className="tour-list">
          {/* Map over the tours and display each one in a card */}
          {tours.map((tour) => (
            <div key={tour.id} className="tour-card">
              <img src={tour.image} alt={tour.name} className="tour-image" />
              <h2>{tour.name}</h2>
              <p>{tour.info}</p>
              <p><strong>Price:</strong> ${tour.price}</p>
              {/* Button to remove the tour */}
              <button onClick={() => removeTour(tour.id)}>Not Interested</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
