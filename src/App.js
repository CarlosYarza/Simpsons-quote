import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import DisplayQuote from './Components/DisplayQuote'

const sampleQuote = {
  quote: "Last night's \"Itchy & Scratchy\" was, without a doubt, the worst episode ever. Rest assured that I was on the Internet within minutes, registering my disgust throughout the world.",
  character: "Comic Book Guy",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FComicBookGuy.png?1497567511970"
}


function App() {
  const [quote, setQuote] = useState(sampleQuote);
  const getQuote = () => {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((response) => response.data)
    .then((data) => setQuote(data[0]));
    };
  
  return (
    <div className="App">
      <header className="App-header">
        <DisplayQuote quote={quote} />
        <br/>
        <button type="button" onClick={getQuote}>Get Quote</button>
      </header>
    </div>
  );
}

export default App;