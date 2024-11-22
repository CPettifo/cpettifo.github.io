import React, { useState, useEffect } from "react";

const Motle = () => {
    const [randomWord, setRandomWord] = useState("");
    const [unaccentedWord, setUnaccentedWord] = useState("");
    const [error, setError] = useState(null);

    // PSUEDOCODE
    // Fetch the word from the backend and display the squares
    // When the user enters a guess do the following (limited to the number of guesses)
        // Check each letter for a match against the back-end
        // If the user has all letters correct end the game and ask if they want to play again
        // Display the squares that the user got right with the appropriate colours
        // Go to the next row and reduce the number of guesses remaining

    // Fetch random word from the backend
        useEffect(() => {
            const fetchRandomWord = async () => {
            try {
                const response = await fetch(
                    // I don't mind if you find the URI here, it's restricted to read-only
                    "https://superb-bombolone-33f34b.netlify.app/.netlify/functions/fetchRandomWord"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch the word");
                }

                const data = await response.json();
                setRandomWord(data.mot); 
                setUnaccentedWord(data.unaccent);
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
                <p>The word is: {randomWord}, Unaccented it is: {unaccentedWord}</p>
            )}
            </div>
        );
        };

        export default Motle;
