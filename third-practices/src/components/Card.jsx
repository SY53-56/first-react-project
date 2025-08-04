import React, { useState } from 'react';
import "./Header.css";

export default function Card() {
    const [player, setPlayer] = useState(null);
    const [comp, setComp] = useState(null);
    const [result, setResult] = useState("");
    const [playerScore, setPlayerScore] = useState(0);
    const [compScore, setCompScore] = useState(0);
    const [round, setRound] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const choices = ['rock', 'paper', 'scissors'];

    const images = {
        rock: "https://fairuzald.github.io/arc-rock-paper-scissors/src/img/rock.png",
        paper: "https://www.vhv.rs/dpng/d/535-5351099_rock-paper-scissors-rock-paper-scissors-icons-png.png",
        scissors: "https://tse3.mm.bing.net/th/id/OIP.Yq5brfMgrfiaRyAAPDfZDAHaHv?rs=1&pid=ImgDetMain&o=7&rm=3"
    };

    const handleClick = (choice) => {
        if (gameOver) return; // agar game khatam ho gaya to click disable

        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        setPlayer(choice);
        setComp(computerChoice);
        getResult(choice, computerChoice);

        setRound(prev => prev + 1); // round increase karo

        if (round + 1 === 5) {
            setGameOver(true); // 5 rounds ke baad game over
        }
    };

    const getResult = (player, computer) => {
        if (player === computer) {
            setResult("It's a draw!");
        } else if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'scissors' && computer === 'paper') ||
            (player === 'paper' && computer === 'rock')
        ) {
            setResult('You win!');
            setPlayerScore(score => score + 1);
        } else {
            setResult('You lose!');
            setCompScore(score => score + 1);
        }
    };

    const resetGame = () => {
        setPlayer(null);
        setComp(null);
        setResult("");
        setPlayerScore(0);
        setCompScore(0);
        setRound(0);
        setGameOver(false);
    };

    return (
        <div className="text-center p-6">
            <h1 className="text-3xl font-bold mb-6">Rock Paper Scissors</h1>
            <p className="mb-2 text-lg">Round: {round} / 5</p>

            <div className="flex justify-center gap-6 mb-8">
                {choices.map((choice) => (
                    <img
                        key={choice}
                        src={images[choice]}
                        alt={choice}
                        onClick={() => handleClick(choice)}
                        className={`w-24 h-24 cursor-pointer hover:scale-110 transition-transform duration-200 ${
                            gameOver ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    />
                ))}
            </div>

            <div className="flex justify-center items-center gap-12 mb-4">
                <div>
                    <h3 className="text-xl font-semibold mb-2">You</h3>
                    {player && <img src={images[player]} alt={player} className="w-20 h-20 mx-auto" />}
                    <h1 className="text-lg mt-2">{playerScore}</h1>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-2">Computer</h3>
                    {comp && <img src={images[comp]} alt={comp} className="w-20 h-20 mx-auto" />}
                    <h1 className="text-lg mt-2">{compScore}</h1>
                </div>
            </div>

            {result && <h2 className="text-2xl font-bold text-green-600 mt-4">{result}</h2>}

            {gameOver && (
                <div className="mt-6">
                    <h2 className="text-xl font-bold text-red-500">Game Over!</h2>
                    <button
                        onClick={resetGame}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Play Again
                    </button>
                </div>
            )}
        </div>
    );
}

