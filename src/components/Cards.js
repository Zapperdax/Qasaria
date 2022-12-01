import React from "react";

function Cards() {
  return (
    <div className="games">
      <h1>Games</h1>
      <div className="cardContainer">
        <div className="myCard">
          <div className="imageContainer">
            <img src="/images/rps.webp" alt="game" />
          </div>
          <div className="cardInfo">
            <h4>RPS</h4>
            <p>Arcade Game</p>
          </div>
          <div className="play">Play</div>
        </div>

        <div className="myCard">
          <div className="imageContainer">
            <img src="/images/tenzies2.jpg" alt="game" />
          </div>
          <div className="cardInfo">
            <h4>Tenzies</h4>
            <p>RNG Game</p>
          </div>
          <div className="play">Play</div>
        </div>

        <div className="myCard">
          <div className="imageContainer">
            <img src="/images/qasaria2.jpg" alt="game" />
          </div>
          <div className="cardInfo">
            <h4>Legends Of Qasaria</h4>
            <p>Story Mode Game</p>
          </div>
          <div className="play">Play</div>
        </div>

        <div className="myCard">
          <div className="imageContainer">
            <img src="/images/simon.jpg" alt="game" />
          </div>
          <div className="cardInfo">
            <h4>Simon Game</h4>
            <p>Memory Game</p>
          </div>
          <div className="play">Play</div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
