import { useEffect, useState } from 'react';
import { getCandies } from './fetch-utils';
import Spinner from './Spinner';
import './App.css';
import CandiesList from './CandiesList';
// import your arrays here

function App() {

  const [candies, setCandies] = useState([]);
  const [isLoadingCandies, setIsLoadingCandies] = useState(false);

  async function fetchCandies() {
    setIsLoadingCandies(true);
    const data = await getCandies();
    setIsLoadingCandies(false);
    setCandies(data);
  }

  useEffect(() => {
    fetchCandies();
  }, []);

 

  return (
    <div className="App">
      <header className="things">
        {
          isLoadingCandies
            ? <Spinner />
            : <CandiesList candies={candies}/>
        }
        Render all your lists here. Pass the arrays as props.
      </header>
    </div>
  );
}

export default App;
