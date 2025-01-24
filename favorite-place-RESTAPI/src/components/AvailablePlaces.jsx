import { useState, useEffect } from 'react'
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { getData } from '../api.js';
import { useFetch } from '../hooks/useFetch.js';

async function sortPlaceByDistance() {
  const data = await getData();

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        data.places,
        position.coords.latitude,
        position.coords.longitude,
      )
      resolve(sortedPlaces);
    });
  });
}


export default function AvailablePlaces({ onSelectPlace }) {
  const [data, error, isFetching, setData] = useFetch(sortPlaceByDistance, []);

  if (error) {
    return <Error message={error.message} title="Something Wrong!" />
  }

  return (
    <Places
      title="Available Places"
      places={data}
      fallbackText="No places available."
      loadingText="fetching data.."
      isLoading={isFetching}
      onSelectPlace={onSelectPlace}
    />
  );
}
