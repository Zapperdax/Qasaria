import React, { useEffect } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import Timer from "./Timer";

export default function App() {
  const [tenzies, setTenzies] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  const generateNewDie = () => {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  };

  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function holdDice(id) {
    setDice((preValue) =>
      preValue.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const handleClick = () => {
    if (!tenzies) {
      handleStart();
      setDice((preValue) =>
        preValue.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
      handleReset();
    }
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      setIsRunning(false);
    }
  }, [dice]);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return (
    <div className="gamesContainer">
      <main>
        {tenzies && <Confetti />}
        <div className="tenziesTop">
          <h1 className="tenzies-title">Tenzies</h1>
          <Timer time={time} />
        </div>
        <p className="instructions">
          Roll Until All Dice Are The Same. Click Each Die To Freeze Its Current
          Value Between Rolls.
        </p>
        <div className="dice-container">
          {dice.map((die) => (
            <Die
              key={die.id}
              value={die.value}
              isHeld={die.isHeld}
              holdDice={() => holdDice(die.id)}
            />
          ))}
        </div>
        <button onClick={handleClick} className="die-button">
          {tenzies ? "New Game" : "Roll"}
        </button>
      </main>
    </div>
  );
}
