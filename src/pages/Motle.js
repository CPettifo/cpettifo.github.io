import React, { useState, useEffect } from "react";

const Motle = () => {
  const [randomWord, setRandomWord] = useState("");
  const [error, setError] = useState(null);

  // Fetch random word from the backend
  useEffect(() => {
    const fetchRandomWord = async () => {
      try {
        const response = await fetch(
          "https://superb-bombolone-33f34b.netlify.app/.netlify/functions/fetchRandomWord"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch the word");
        }

        const data = await response.json();
        setRandomWord(data.mot); 
      } catch (err) {
        setError(err.message);
      }
    };

    fetchRandomWord();
  }, []);

  return (
    <div className="motle">
      <h1>Motle</h1>
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <p>The word is: {randomWord}</p>
      )}
    </div>
  );
};

export default Motle;
