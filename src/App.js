import { useEffect, useState } from 'react';
import { getCandies, getPlayers } from './fetch-utils';
import Spinner from './Spinner';
import './App.css';
import CandiesList from './CandiesList';
import PlayersList from './PlayersList.js';
// import your arrays here

function App() {

  const [candies, setCandies] = useState([]);
  const [isLoadingCandies, setIsLoadingCandies] = useState(false);
  const [players, setPlayers] = useState([]);
  const [isLoadingPlayers, setIsLoadingPlayers] = useState(false);
  

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
        Render all your lists here. Pass the arrays as props.
      </header>
    </div>
  );
}

export default App;
