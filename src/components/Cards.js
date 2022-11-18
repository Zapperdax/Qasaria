import React from "react";

function Cards() {
  return (
    <div className="games">
      <h1>Games</h1>
      <div className="cardContainer">
        <div className="myCard">
          <div className="imageContainer">
            <img src="/images/game.jpg" alt="game" />
          </div>
          <div className="cardInfo">
            <h4>Tenzies</h4>
            <p>Arcade Game</p>
          </div>
          <div className="play">Play</div>
        </div>

        <div className="myCard">
          <div className="imageContainer">
            <img src="/images/dem.jpg" alt="game" />
          </div>
          <div className="cardInfo">
            <h4>Tenzies</h4>
            <p>Arcade Game</p>
          </div>
          <div className="play">Play</div>
        </div>

        <div className="myCard">
          <div className="imageContainer">
            <img src="/images/wallpaper.jpg" alt="game" />
          </div>
          <div className="cardInfo">
            <h4>Tenzies</h4>
            <p>Arcade Game</p>
          </div>
          <div className="play">Play</div>
        </div>

        <div className="myCard">
          <div className="imageContainer">
            <img src="/images/wallpaper.jpg" alt="game" />
          </div>
          <div className="cardInfo">
            <h4>Tenzies</h4>
            <p>Arcade Game</p>
          </div>
          <div className="play">Play</div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
