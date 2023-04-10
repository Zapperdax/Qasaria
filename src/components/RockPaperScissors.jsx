import React from "react";
import { Button } from "react-bootstrap";
import { api } from "../utils/axois";
import { useSelector } from "react-redux";

const RockPaperScissors = () => {
  const [score, setScore] = React.useState({ userScore: 0, compScore: 0 });
  const [finalScore, setFinalScore] = React.useState(0);
  const [result, setResult] = React.useState("Rock Paper Scissors");
  const [gameOver, setGameOver] = React.useState(false);
  const currentUser = useSelector((state) => state.users.user);
  let rpswin = new Audio("/audios/rpswin.mpga");
  let rpslose = new Audio("/audios/rpslose.mpga");
  let rpsdraw = new Audio("/audios/draw2.mpga");

  const convertToWord = (letter) => {
    switch (letter) {
      case "r":
        return "rock";
      case "p":
        return "paper";
      case "s":
        return "scissor";
      default:
        return "Not A Letter";
    }
  };
  const checkGameOver = async (user, comp) => {
    if (user === 19 || comp === 19) {
      setGameOver(true);
      if (user > comp) {
        const score = user - comp + 1;
        setFinalScore(score);
        await api.post("/rps/highScore", {
          email: currentUser.email,
          highScore: score,
          name: currentUser.name,
        });
      } else {
        setFinalScore("You Lose");
      }
    }
  };
  const win = (userChoice, computerChoice) => {
    rpswin.play();
    checkGameOver(score.userScore, score.compScore);
    setScore((preValue) => ({
      ...preValue,
      userScore: preValue.userScore + 1,
    }));
    setResult(
      `User Choose ${convertToWord(userChoice)} Computer Choose ${convertToWord(
        computerChoice
      )}, You Win`
    );
  };
  const lose = (userChoice, computerChoice) => {
    rpslose.play();
    checkGameOver(score.userScore, score.compScore);
    setScore((preValue) => ({
      ...preValue,
      compScore: preValue.compScore + 1,
    }));
    setResult(
      `User Choose ${convertToWord(userChoice)} Comupter Choose ${convertToWord(
        computerChoice
      )}, You Lose`
    );
  };
  const draw = (userChoice, computerChoice) => {
    rpsdraw.play();
    setResult(
      `User Choose ${convertToWord(userChoice)} Comupter Choose ${convertToWord(
        computerChoice
      )} It's A Draw`
    );
  };
  const handleClick = (userChoice) => {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNumber];
    switch (userChoice + computerChoice) {
      case "rs":
      case "pr":
      case "sp":
        win(userChoice, computerChoice);
        break;
      case "rp":
      case "ps":
      case "sr":
        lose(userChoice, computerChoice);
        break;
      case "rr":
      case "pp":
      case "ss":
        draw(userChoice, computerChoice);
        break;
      default:
        console.log("No A Case");
    }
  };

  const handleGameOver = () => {
    setScore({ userScore: 0, compScore: 0 });
    setGameOver(false);
    setFinalScore(0);
  };
  return (
    <div className="gamesContainer">
      <div className="rpsmain">
        <div className="rps-score-board">
          <div id="user-label" className="rpsBadge">
            user
          </div>
          <div id="comp-label" className="rpsBadge">
            comp
          </div>
          <span id="user-score">{score.userScore}</span>:
          <span id="comp-score">{score.compScore}</span>
        </div>
        {!gameOver ? (
          <div>
            <div className="result">
              <p>{result}</p>
            </div>
            <div className="choices">
              <div className="choice" onClick={() => handleClick("r")}>
                <img
                  className="rpsImage"
                  src="/images/icon-rock.svg"
                  alt="choice"
                />
              </div>
              <div className="choice" onClick={() => handleClick("p")}>
                <img
                  className="rpsImage"
                  src="/images/icon-paper.svg"
                  alt="choice"
                />
              </div>

              <div className="choice" onClick={() => handleClick("s")}>
                <img
                  className="rpsImage"
                  src="/images/icon-scissors.svg"
                  alt="choice"
                />
              </div>
            </div>

            <p id="actionMessage">Make You Move</p>
          </div>
        ) : (
          <div style={{ textAlign: "center" }} className="result">
            Your Score is: {finalScore}
          </div>
        )}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
          }}
        >
          {gameOver && (
            <Button
              onClick={handleGameOver}
              style={{
                backgroundColor: "#2f2736",
              }}
            >
              Start Over
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RockPaperScissors;
