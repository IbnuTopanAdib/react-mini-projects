import { useState, useEffect } from 'react'
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { getData } from '../api.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isLoading, setIsLoading] = useState(null);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchAvailablePlaces() {
      setIsLoading(true);

      try {
        const data = await getData()
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            data.places,
            position.coords.latitude,
            position.coords.longitude,

          )
          setAvailablePlaces(sortedPlaces);
          setIsLoading(false);
        });
      } catch (error) {
        setError({ message: error.message || "Hmmm I don't know" })
        setIsLoading(false);
      }
    }

    fetchAvailablePlaces()

  }, []);

  if (error) {
    return <Error message={error.message} title="Something Wrong!" />
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      loadingText="fetching data.."
      isLoading={isLoading}
      onSelectPlace={onSelectPlace}
    />
  );
}
