import { useEffect, useState } from 'react';
import { getCandies, getPlayers, getCars } from './fetch-utils';
import Spinner from './Spinner';
import './App.css';
import CandiesList from './CandiesList';
import PlayersList from './PlayersList.js';
import CarsList from './CarsList';
// import your arrays here

function App() {

  const [candies, setCandies] = useState([]);
  const [isLoadingCandies, setIsLoadingCandies] = useState(false);
  const [players, setPlayers] = useState([]);
  const [isLoadingPlayers, setIsLoadingPlayers] = useState(false);
  const [cars, setCars] = useState([]);
  const [isLoadingCars, setIsLoadingCars] = useState(false);

  
  async function fetchCars() {
    setIsLoadingCars(true);
    const data = await getCars();
    setIsLoadingCars(false);
    setCars(data);
  }

  async function fetchCandies() {
    setIsLoadingCandies(true);
    const data = await getCandies();
    setIsLoadingCandies(false);
    setCandies(data);
  }

  async function fetchPlayers() {
    setIsLoadingPlayers(true);
    const data = await getPlayers();
    setIsLoadingPlayers(false);
    setPlayers(data);
  }


  useEffect(() => {
    fetchCandies();
    fetchPlayers();
    fetchCars();
  }, []);


 

  return (
    <div className="App">
      <header className="things">
        {
          isLoadingCandies
            ? <Spinner name='candy'/>
            : <CandiesList candies={candies}/>
        }
        {
          isLoadingPlayers
            ? <Spinner name='player'/>
            : <PlayersList players={players}/>
        }
        {
          isLoadingCars
            ? <Spinner name='cars'/>
            : <CarsList cars={cars}/>
        }
        Render all your lists here. Pass the arrays as props.
      </header>
    </div>
  );
}

export default App;
