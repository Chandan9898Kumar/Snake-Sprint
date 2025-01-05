import React, { Component } from "react";
import Swipe from "react-easy-swipe";
import "./App.css";
import "./utils.css";

import GameBoard from "./components/GameBoard/GameBoard";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import SnakeHeader from "./components/SnakeHeader/SnakeHeader";
class App extends Component {
  constructor() {
    super();

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

    // let snake = new Snake();

    // snake.add(new Body([1, 3], "R"));
    // snake.add(new Body([1, 2], "R"));
    // snake.add(new Body([1, 1], "R"));

    this.state = {
      currentScore: 0,
      bestScore: "--",
      gameOverMsg: "",
      // snake: snake,
      foodCoordinate: [8, 18],
      // foodClass: this.foodClasses[this.getRandomInt(0, this.foodClasses.length - 1)],
      gameOverDisplay: false,
      gameMenuDisplay: true,
    };

    // this.updateSnakeState = this.updateSnakeState.bind(this);
    // this.onSwipeMove = this.onSwipeMove.bind(this);
    // this.keyListner = this.keyListner.bind(this);
    // this.startGame = this.startGame.bind(this);
    // this.gameOver = this.gameOver.bind(this);
    // this.endGame = this.endGame.bind(this);
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

            <div className="border mt-2">
              <GameBoard
              boardWidth={this.boardHeight}
              boardHeight={this.boardHeight}
              currentScore={this.state.currentScore}
              foodCoordinate={this.state.foodCoordinate}
              foodClasses={this.state.foodClasses}
              gameOverDisplay={this.state.gameOverDisplay}
              
               />
            </div>

            {this.state.gameMenuDisplay && (
              <div className="border menu-overlay mt-2">
                <div className="flex flex-center">
                  <div className="snake-food snake menu-food mr-4"></div>
                  <div className="game-over-text">MENU</div>
                  <div className="snake-food snake invert menu-food ml-4"></div>
                </div>
                <div className="flex mt-2">
                  <span
                    // onClick={this.startGame.bind(this, 200)}
                    className="snakeButton mr-1"
                  >
                    EASY
                  </span>
                  <span
                    // onClick={this.startGame.bind(this, 120)}
                    className="snakeButton mr-1 ml-1"
                  >
                    MEDIUM
                  </span>
                  <span
                    // onClick={this.startGame.bind(this, 75)}
                    className="snakeButton ml-1"
                  >
                    HARD
                  </span>
                </div>
              </div>
            )}

            {this.state.gameOverDisplay && (
              <div className="border gameover-overlay mt-2">
                <div className="game-over-text">{this.state.gameOverMsg}</div>
                <div className="flex mt-2">
                  <span
                    // onClick={this.endGame}
                    className="snakeButton mr-1 ml-1"
                  >
                    RESTART
                  </span>
                </div>
              </div>
            )}
          </div>
        </Swipe>
      </div>
    );
  }
}

export default App;
