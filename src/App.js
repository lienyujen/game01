import React, { useState } from 'react';

const DartGame = () => {
    const [score, setScore] = useState(0);
    const [throws, setThrows] = useState(0);
    const [isGameActive, setIsGameActive] = useState(false);
    
    const throwDart = () => {
        if (isGameActive) {
            const points = Math.floor(Math.random() * 61);  // Random score between 0 to 60
            setScore(score + points);
            setThrows(throws + 1);
        }
    };

    const startGame = () => {
        setScore(0);
        setThrows(0);
        setIsGameActive(true);
    };

    const endGame = () => {
        setIsGameActive(false);
        alert(`Game Over! Your score is: ${score} with ${throws} throws.`);
    };

    return (
        <div>
            <h1>Dart Game</h1>
            <p>Score: {score}</p>
            <p>Throws: {throws}</p>
            <button onClick={startGame} disabled={isGameActive}>Start Game</button>
            <button onClick={throwDart} disabled={!isGameActive}>Throw Dart</button>
            <button onClick={endGame} disabled={!isGameActive}>End Game</button>
        </div>
    );
};

export default DartGame;
