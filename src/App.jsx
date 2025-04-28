import { useState, useEffect } from 'react';
import './App.css';
import Gallery from './components/Gallery'; // Import the Gallery component

function App() {
  // State to store the list of tours
  const [tours, setTours] = useState([]);
  // State to manage the loading state
  const [loading, setLoading] = useState(true);
  // State to handle errors during data fetching
  const [error, setError] = useState(null);

  // Fetch tours from the API when the component mounts or when refreshed
  const fetchTours = async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      const response = await fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project");
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

  // Fetch tours when the component mounts
  useEffect(() => {
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

  // Render the Gallery component with the tour data or a "Refresh" button if no tours are left
  return (
    <div className="App">
      <h1>Tour Gallery</h1>
      {tours.length === 0 ? (
        <div>
          <h2>No tours left</h2>
          {/* Button to refresh the tours */}
          <button onClick={fetchTours} className="refresh-btn">
            Refresh
          </button>
        </div>
      ) : (
        <Gallery tours={tours} onRemove={removeTour} />
      )}
    </div>
  );
}

export default App;
