import React from "react";
import { useNavigate } from "react-router-dom";
import HelpIcon from "@mui/icons-material/Help";

function Cards() {
  const navigate = useNavigate();
  const handleTenzies = () => {
    navigate("/tenzies");
  };
  const handleRPS = () => {
    navigate("/rps");
  };
  const handleSimon = () => {
    navigate("/simon");
  };
  return (
    <div className="games">
      <h1>Games</h1>
      <div className="cardContainer">
        {/* //first Card */}
        <div className="myCard">
          <HelpIcon
            sx={{ position: "absolute", right: 5, top: 5, color: "#fff" }}
          />

          <div className="imageContainer">
            <img src="/images/rps.webp" alt="game" />
          </div>
          <div className="cardInfo">
            <h4>RPS</h4>
            <p>Arcade Game</p>
          </div>
          <div className="play" onClick={handleRPS}>
            Play
          </div>
        </div>
        {/* //Second Card */}
        <div className="myCard">
          <HelpIcon
            sx={{ position: "absolute", right: 5, top: 5, color: "#fff" }}
            color="success"
          />
          <div className="imageContainer">
            <img src="/images/tenzies2.jpg" alt="game" />
          </div>
          <div className="cardInfo">
            <h4>Tenzies</h4>
            <p>RNG Game</p>
          </div>
          <div className="play" onClick={handleTenzies}>
            Play
          </div>
        </div>
        {/* //Third Card */}
        <div className="myCard">
          <HelpIcon
            sx={{ position: "absolute", right: 5, top: 5, color: "#fff" }}
            color="success"
          />
          <div className="imageContainer">
            <img src="/images/qasaria3.png" alt="game" />
          </div>
          <div className="cardInfo">
            <h4>Legends Of Qasaria</h4>
            <p>Story Mode Game</p>
          </div>
          <div className="play">Play</div>
        </div>
        {/* //Forth Card */}
        <div className="myCard">
          <HelpIcon
            sx={{ position: "absolute", right: 5, top: 5, color: "#fff" }}
            color="success"
          />
          <div className="imageContainer">
            <img src="/images/simon.jpg" alt="game" />
          </div>

          <div className="cardInfo">
            <h4>Simon Game</h4>
            <p>Memory Game</p>
          </div>
          <div className="play" onClick={handleSimon}>
            Play
          </div>
        </div>

        {/* Card Ends Here */}
      </div>
    </div>
  );
}

export default Cards;
