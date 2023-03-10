import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const Simon = () => {
  const [isOn, setIsOn] = useState(false);

  const colorList = ["green", "red", "yellow", "blue"];
  const [flashColor, setFlashColor] = useState("");

  const initPlay = {
    isDisplay: false,
    colors: [],
    score: 0,
    userPlay: false,
    userColors: [],
  };

  const [play, setPlay] = useState(initPlay);

  const handleStart = () => {
    setIsOn(true);
  };

  useEffect(() => {
    if (isOn) {
      setPlay({ ...initPlay, isDisplay: true });
    } else {
      setPlay(initPlay);
    }
  }, [isOn]);

  useEffect(() => {
    if (isOn && play.isDisplay) {
      let newColor = colorList[Math.floor(Math.random() * 4)];
      const copyColors = [...play.colors];
      copyColors.push(newColor);
      setPlay({ ...play, colors: copyColors });
    }
  }, [isOn, play.isDisplay]);

  useEffect(() => {
    if (isOn && play.isDisplay && play.colors.length) {
      displayColors();
    }
  }, [isOn, play.isDisplay, play.colors.length]);

  const displayColors = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    for (let i = 0; i < play.colors.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFlashColor(play.colors[i]);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFlashColor("");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (i === play.colors.length - 1) {
        const copyColors = [...play.colors];

        setPlay({
          ...play,
          isDisplay: false,
          userPlay: true,
          userColors: copyColors.reverse(),
        });
      }
    }
  };
  const handleClick = async (color) => {
    if (!play.isDisplay && play.userPlay) {
      const copyUserColors = [...play.userColors];
      const lastColor = copyUserColors.pop();
      setFlashColor(color);
      if (color === lastColor) {
        if (copyUserColors.length) {
          setPlay({ ...play, userColors: copyUserColors });
        } else {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setPlay({
            ...play,
            isDisplay: true,
            userPlay: false,
            score: play.colors.length,
            userColors: [],
          });
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setPlay({ ...initPlay, score: play.colors.length });
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFlashColor("");
    }
  };

  const handleClose = () => {
    setIsOn(false);
  };

  return (
    <div className="gamesContainer">
      <div className="simonColumn">
        <div className="simonHeading">
          <h1>Simon's Game</h1>
          {isOn && (play.isDisplay || play.userPlay) && (
            <>
              <h4>Your Score: </h4>
              <span>{play.score}</span>
            </>
          )}
        </div>
        <div className="gameGrid">
          <div className="simonRowOne">
            <div
              onClick={() => handleClick("green")}
              className={`simonBoxOne ${flashColor === "green" ? "flash" : ""}`}
            ></div>
            <div
              onClick={() => handleClick("red")}
              className={`simonBoxTwo ${flashColor === "red" ? "flash" : ""}`}
            ></div>
          </div>
          <div className="simonRowTwo">
            <div
              onClick={() => handleClick("yellow")}
              className={`simonBoxThree ${
                flashColor === "yellow" ? "flash" : ""
              }`}
            ></div>
            <div
              onClick={() => handleClick("blue")}
              className={`simonBoxFour ${flashColor === "blue" ? "flash" : ""}`}
            ></div>
          </div>
        </div>
        <div className="simonButton">
          {!isOn && !play.score && (
            <Button onClick={handleStart} variant="success">
              Start
            </Button>
          )}
          {isOn && !play.isDisplay && !play.userPlay && play.score && (
            <>
              <h3 style={{ color: "white" }}>Your Score: {play.score}</h3>
              <Button onClick={handleClose} variant="warning">
                End Game
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Simon;
