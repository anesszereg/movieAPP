import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Netflix = () => {
  const [episodes, setEpisodes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        console.log('Starting request to fetch anime data...'); // Log request start
        const response = await axios.get(
          'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc',
          {
            headers: {
              'x-rapidapi-key': 'abfb63175cmsh99732e5167f596ep19e573jsn2ca6845f8ce8',
              'x-rapidapi-host': 'anime-db.p.rapidapi.com',
            },
          }
        );
        console.log('Response data:', response.data); // Log response data
        setAnimeData(response.data.data); // Assuming the data is inside response.data.data
      } catch (error) {
        console.error('Error fetching data:', error); // Log error
        setError(error.message);
      }
    };

    fetchAnime();
  }, []);

  return (
    <div>
      <h1>Netflix Episodes</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {episodes.length > 0 ? (
          episodes.map((episode, index) => (
            <li key={index}>{episode.name || `Episode ${index + 1}`}</li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
};

export default Netflix;
