import react, { useState, useEffect } from "react";

import * as brain from 'brain.js';

const GuessNumber = ({net}) => {
  const [number, setNum] = useState([]);
  const [search, setSearch] = useState('');
  const [guess, setGuess] = useState([]);

  const addArray = (e) => {
    // const net = new brain.recurrent.LSTM();

    // net.train([
    //     { input: "Hello, I'm John Walker.", output: "complete" },
    //     { input: "This is on you!", output: "complete" },
    //     { input: "John kik", output: "incomplete" },
    //     { input: "This is", output: "incomplete" },
    //     { input: "Great job.", output: "complete" },
    //     { input: "When I hear a", output: "incomplete" }
    //   ]);


      // now we're cookin' with gas!
const forecast = net.forecast(
    [
      [1, 5],
      [2, 4],
    ],
    3
  );
  
  console.log('next 3 predictions', forecast);

    e.preventDefault();
    
    setNum([...number, search]);
    setSearch('');
    // const opt = net.run({input: search}); 
    // setGuess(closeToFiveAndOne);
}
const updateSearch = (e) => {
    console.log(e.target.value);
    setSearch (e.target.value)
  }


  return (
    <>
      <div>
        <h1>Guess the Numbers game </h1>
        <form onSubmit={addArray} >
        <input  
        type="text" 
        value={search} 
        onChange={updateSearch} />
        <button  type='submit' >
        Search   </button>        
      </form>
      <h4>{number} {guess.output}</h4>
      </div>
    </>
  );
};

export default GuessNumber;