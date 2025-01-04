import Swipe from "react-easy-swipe";
import "./App.css";
import './utils.css'
import React, { Component } from "react";

import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import SnakeHeader from "./components/SnakeHeader/SnakeHeader";
class App extends Component {
  constructor() {
    super();

    this.state = {
      currentScore: 0,
      bestScore: "--",
      gameOverMsg: "",
      gameOverDisplay: false,
      gameMenuDisplay: true,
    };
    this.foodClasses = [
      "blueberry",
      "cherry",
      "grapes",
      "raspberry",
      "strawberry",
    ];
    this.turningPoints = [];
    this.boardWidth = 20;
    this.boardHeight = 15;
    this.snakeDelay = 100;
    this.allowSwipe = true;
    this.mode = "easy";
    this.eatAudio = new Audio(
      "https://github.com/diozz/snake-react-js/raw/main/src/sounds/eat.mp3"
    );
    this.gameOverAudio = new Audio(
      "https://github.com/diozz/snake-react-js/raw/main/src/sounds/game-over.mp3"
    );
  }

  render() {
    return (
      <div
        className="app-bg"
        onTouchStart={() => {
          console.log("touch start");
          this.allowSwipe = true;
        }}
      >
        <Swipe className="full-height flex flex-center">
          <div className="container">

            <div className="flex">
              <div className="titleContainer">
                <div className="border">
                  <SnakeHeader />
                </div>
              </div>
              <div className="scoreContainer">
                <div className="border">
                  <ScoreBoard
                    bestScore={this.state.bestScore}
                    currentScore={this.state.currentScore}
                  />
                </div>
              </div>
            </div>


          </div>
        </Swipe>
      </div>
    );
  }
}

export default App;
