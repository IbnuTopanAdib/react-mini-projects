import { useRef, useEffect, useState, useCallback } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { putData } from './api.js';
import { getUserData } from './api.js';
import Error from './components/Error.jsx';

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [error, setError] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData();
        setUserPlaces(data.places);
      } catch (error) {
        setError({ message: error.message });
      }
    };

    fetchData();
  }, []);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });
    try {
      await putData([selectedPlace, ...userPlaces])
    } catch (error) {
      setUserPlaces(userPlaces);
      setError({ message: error.message })
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );
    try {
      await putData(userPlaces.filter((place) => place.id == selectedPlace.current.id))
    } catch (error) {
      setUserPlaces(userPlaces);
      setError({ message: error.message || 'Something went wrong' });
    }

    setModalIsOpen(false);
  }, []);

  function handleError() {
    setError(null);
  }

  return (
    <>

      <Modal open={error} onClose={handleError}>
        {
          error && (<Error
            title="Something went wrong!!"
            message={error.message}
            onConfirm={handleError} />)
        }

      </Modal>


      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
