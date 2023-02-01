import "./App.css";
import React, { useState, useEffect } from "react";
function App() {
  const [quote, setQuote] = useState({});
  const [color, setColor] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
        setColor(getRandomColor());
      });
  };

  const getRandomColor = () => {
    const colors = ["#16a085", "#27ae60", "#2c3e50", "#f39c12", "#e74c3c", "#9b59b6", "#FB6964", "#342224", "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
<div className="App" style={{ backgroundColor: color }}>
      <div id="quote-box">
        <div id="text">
          <p className="quote-text">"{quote.content}"</p>
        </div>
        <div id="author">
          <p className="quote-author">- {quote.author}</p>
        </div>
        <div id="buttons">
<button id="new-quote" onClick={fetchQuote}>
            New Quote
          </button>
        </div>
      </div>
    </div>

  );
}
export default App;




