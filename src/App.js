import { useEffect, useState } from 'react';
import { getCandies } from './fetch-utils';
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
        Render all your lists here. Pass the arrays as props. YES
      <CandiesList candies={candies}/>
    </div>
  );
}

export default App;
