import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.timer = 0;
    this.state = { time: 0, x: 0, y: 0, startGame: false };
  }

  componentDidMount() {
    const onKeyDown = function (event) {
      if (event.keyCode === 39) {
        this.setState({ x: this.state.x + 5 });
      }
      if (event.keyCode === 37) {
        this.setState({ x: this.state.x - 5 });
      }
      if (event.keyCode === 38) {
        this.setState({ y: this.state.y - 5 });
      }
      if (event.keyCode === 40) {
        this.setState({ y: this.state.y + 5 });
      }
    };
    this.timer = setInterval(() => {
      if (this.state.startGame) {
        this.setState({ time: this.state.time + 1 });
        if (this.state.x === 250 && this.state.y === 250) {
          this.setState({ startGame: false });
          document.removeEventListener("keydown", onKeyDown);
          return;
        }
        document.addEventListener("keydown", onKeyDown);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleClick = function () {
    this.setState({ startGame: true });
  };

  render() {
    return (
      <>
        <button className="start" onClick={this.handleClick}>
          start
        </button>
        <div className="heading-timer">{this.state.time}</div>
        <div
          className="ball"
          style={{ left: this.state.x, top: this.state.y }}
        ></div>
        <div className="hole"></div>
      </>
    );
  }
}

export default Timer;
