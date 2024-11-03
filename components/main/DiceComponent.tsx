"use client"
import { useState } from "react";

const diceImages = [
    '/dice/1.png',
    '/dice/2.png',
    '/dice/3.png',
    '/dice/4.png',
    '/dice/5.png',
    '/dice/6.png',
];

const DiceComponent = () => {
    const [roll, setRoll] = useState(1);
    const [rolling, setRolling] = useState(false);

    // Function to roll the dice
    const rollDice = () => {
        setRolling(true);
        setTimeout(() => {
            const newRoll = Math.floor(Math.random() * 6) + 1;
            setRoll(newRoll);
            setRolling(false);
        }, 1000); // Adjust time to show rolling effect
    };

    return (
        <div className="flex flex-col items-center justify-center  bg-gray-100">
            <div className={`dice w-24 h-24 bg-white flex items-center justify-center border-4 border-gray-500 rounded-md shadow-md transform ${rolling ? 'animate-roll' : ''}`}>
                <img
                    src={diceImages[roll - 1]}
                    alt={`Dice ${roll}`}
                    className={`w-full h-full transition-transform duration-300 ${rolling ? 'scale-125' : ''}`}
                />
            </div>
            <button
                onClick={rollDice}
                className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-300"
            >
                Roll Dice
            </button>

            <style jsx>{`
                @keyframes roll {
                    0% { transform: rotateX(0deg) rotateY(0deg); }
                    25% { transform: rotateX(180deg) rotateY(180deg); }
                    50% { transform: rotateX(0deg) rotateY(180deg); }
                    75% { transform: rotateX(180deg) rotateY(0deg); }
                    100% { transform: rotateX(0deg) rotateY(0deg); }
                }

                .animate-roll {
                    animation: roll 1s forwards;
                }
            `}</style>
        </div>
    );
};

export default DiceComponent;
