import Swipe from "react-easy-swipe";
import "./App.css";
import React, { Component } from "react";
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
    this.eatAudio = new Audio("https://github.com/diozz/snake-react-js/raw/main/src/sounds/eat.mp3");
    this.gameOverAudio = new Audio("https://github.com/diozz/snake-react-js/raw/main/src/sounds/game-over.mp3");

  
  }

  render() {
    return (
      <div className="app-bg">
        <Swipe
        
        className="full-height flex flex-center"
        >Snake</Swipe>
      </div>
    );
  }
}

export default App;
