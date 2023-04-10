import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { api } from "../utils/axois";
import { useSelector } from "react-redux";

const Simon = () => {
  const user = useSelector((state) => state.users.user);
  const [isOn, setIsOn] = useState(false);

  const colorList = ["green", "red", "yellow", "blue"];
  const [flashColor, setFlashColor] = useState("");
  var sounds = {
    green: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
    red: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
    blue: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    yellow: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
  };

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
    await new Promise((resolve) => setTimeout(resolve, 500));
    for (let i = 0; i < play.colors.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setFlashColor(play.colors[i]);
      sounds[play.colors[i]].play();
      await new Promise((resolve) => setTimeout(resolve, 500));
      setFlashColor("");
      await new Promise((resolve) => setTimeout(resolve, 500));
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
    sounds[color].play();
    if (!play.isDisplay && play.userPlay) {
      const copyUserColors = [...play.userColors];
      const lastColor = copyUserColors.pop();
      setFlashColor(color);
      if (color === lastColor) {
        if (copyUserColors.length) {
          setPlay({ ...play, userColors: copyUserColors });
        } else {
          await new Promise((resolve) => setTimeout(resolve, 500));
          setPlay({
            ...play,
            isDisplay: true,
            userPlay: false,
            score: play.colors.length,
            userColors: [],
          });
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setPlay({ ...initPlay, score: play.colors.length });
        await api.post("/simon/highScore", {
          email: user.email,
          highScore: play.colors.length,
          name: user.name,
        });
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
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
