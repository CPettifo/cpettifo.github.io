import React, { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  // Default grid size
  const [size, setSize] = useState(16); 
  const boardRef = useRef(null);

  const drawBoard = (size) => {
    const board = boardRef.current;
    // Clears the board
    board.innerHTML = ""; 

    for (let i = 0; i < size; i++) {
      const rows = document.createElement("div");
      rows.classList.add("row");

      for (let j = 0; j < size; j++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.backgroundColor = "white";

        pixel.addEventListener("mouseover", () => {
          pixel.style.backgroundColor = "black";
        });

        pixel.addEventListener("touchstart", (event) => {
          event.preventDefault(); // Prevent scrolling
          pixel.style.backgroundColor = "black";
        });
        
        pixel.addEventListener("touchmove", (event) => {
          event.preventDefault(); // Prevent scrolling
          const touch = event.touches[0];
          const elementUnderTouch = document.elementFromPoint(touch.clientX, touch.clientY);
          if (elementUnderTouch && elementUnderTouch.classList.contains("pixel")) {
            elementUnderTouch.style.backgroundColor = "black";
          }
        });

        rows.appendChild(pixel);
      }
      board.appendChild(rows);
    }
  };

  useEffect(() => {
    drawBoard(size);
  }, [size]); 
  // Re-render the board when size changes

  const resetBoard = () => {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
      pixel.style.backgroundColor = "white";
    });
  };

  const handleSliderChange = (event) => {
    const newSize = event.target.value;
    setSize(parseInt(newSize, 10));
  };

  return (

  <div>
    <div className="etch-a-sketch">
      <h1>Hey there</h1>
      <h2>Portfolio in progress, let's Etch-a-Sketch while we wait.</h2>
      <div ref={boardRef} id="board"></div>
      <div id="settings">
        <button id="reset" onClick={resetBoard}>
          Reset
        </button>
        <div className="slider-container">
        <label htmlFor="grid-size-slider">Grid Size: {size} x {size}</label>
        <input
          id="grid-size-slider"
          type="range"
          min="4"
          max="64"
          value={size}
          onChange={handleSliderChange}
        />
        </div>
      </div>
      <footer className="footer">
        <p>Built with React by Craig Pettifor</p>
      </footer>
    </div>
  </div>

  );
}

export default App;
