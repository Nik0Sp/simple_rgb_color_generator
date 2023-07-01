import React, { useState } from 'react';

const App = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const handleColorChange = () => {
    const color = `rgb(${red}, ${green}, ${blue})`;
    document.getElementById("color-output").style.backgroundColor = color;
    document.getElementById("output").innerHTML = color;
  };

  return (
    <div className="section">
     
      <div className="container glass">
      <div id="color-output"></div>
        <h2 style={{ background: `rgb(${red}, ${green}, ${blue})` }}>Simple RGB Color Generator</h2>
        <div className="input-container glass">
          <div className="wrapper">
            R
            <input
              type="range"
              min="0"
              max="255"
              value={red}
              onChange={(e) => setRed(e.target.value)}
              onMouseUp={handleColorChange}
            />
          </div>
          <div className="wrapper">
            G
            <input
              type="range"
              min="0"
              max="255"
              value={green}
              onChange={(e) => setGreen(e.target.value)}
              onMouseUp={handleColorChange}
            />
          </div>
          <div className="wrapper">
            B
            <input
              type="range"
              min="0"
              max="255"
              value={blue}
              onChange={(e) => setBlue(e.target.value)}
              onMouseUp={handleColorChange}
            />
          </div>
        </div>
        <span id="output">{`rgb(${red}, ${green}, ${blue})`}</span>
      </div>
    </div>
  );
};

export default App;