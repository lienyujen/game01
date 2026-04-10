import React, { useState, useEffect } from 'react';
import { IconSound, IconMute } from 'lucide-react';

// RINGS constant defining dartboard zones
const RINGS = [
    { zone: 1, score: 1, radius: 99 },
    { zone: 2, score: 2, radius: 120 },
    { zone: 3, score: 3, radius: 140 },
    { zone: 4, score: 4, radius: 160 },
    { zone: 5, score: 5, radius: 180 },
    { zone: 6, score: 6, radius: 200 },
    { zone: 7, score: 7, radius: 220 },
    { zone: 8, score: 8, radius: 240 },
    { zone: 9, score: 9, radius: 260 },
    { zone: 10, score: 10, radius: 280 },
];

const playSound = () => {
    const audio = new Audio('path/to/sound.mp3');
    audio.play();
};

const App = () => {
    const [gameState, setGameState] = useState('setup'); // setup, playing, over
    const [players, setPlayers] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [turns, setTurns] = useState(0);
    const [scores, setScores] = useState([0, 0]);
    const [soundEnabled, setSoundEnabled] = useState(true);

    useEffect(() => {
        // Notifying player of the current turn or game state
    }, [gameState, currentPlayer]);

    const throwDart = (angle, distance) => {
        const scoreZone = RINGS.find(ring => distance <= ring.radius);
        if (scoreZone) {
            const newScores = [...scores];
            newScores[currentPlayer] += scoreZone.score;
            setScores(newScores);
            if (soundEnabled) playSound();
            // Advance turn
            setTurns(turns + 1);
        }
    };

    const resetGame = () => {
        setScores([0, 0]);
        setTurns(0);
        setGameState('setup');
        setCurrentPlayer(0);
    };

    return (
        <div className="flex flex-row">
            <div className="scoreboard">
                <h1>Scoreboard</h1>
                <p>Player 1: {scores[0]}</p>
                <p>Player 2: {scores[1]}</p>
                <button onClick={resetGame}>Reset</button>
                <button onClick={() => setSoundEnabled(!soundEnabled)}>
                    {soundEnabled ? <IconSound /> : <IconMute />}
                </button>
            </div>
            <svg className="dartboard">
                {/* SVG dartboard rendering with rings and dart markers */}
                <circle cx="150" cy="150" r="99" fill="white" />
                {RINGS.map(ring => (
                    <circle key={ring.zone} cx="150" cy="150" r={ring.radius} fill="none" stroke="black" />
                ))}
            </svg>
        </div>
    );
};

export default App;