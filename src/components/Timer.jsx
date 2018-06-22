import React, { Component } from 'react';

import { calculateTime } from '../features/activity/helpers';

export default class CountDown extends Component {
  state = {
    elapsedTime: 0
  };

  getSeconds = seconds => `0${seconds % 60}`.slice(-2);
  getMinutes = seconds => Math.floor(seconds / 60);

  handleStart = () => {
    this.timer = setInterval(
      () => this.setState(state => ({ elapsedTime: state.elapsedTime + 1 })),
      1000
    );
  };

  handleStop = () => clearInterval(this.timer);

  render() {
    const { timer } = this.state;
    return (
      <div className="big b pa3">
        <div>
          <h1 data-testid="timerTime">
            {this.getMinutes(this.state.elapsedTime)}:{this.getSeconds(
              this.state.elapsedTime
            )}
          </h1>
          <button onClick={this.handleStart} data-testid="startTimer">
            Start
          </button>
          <button onClick={this.handleStop} data-testid="stopTimer">
            Stop
          </button>
        </div>
      </div>
    );
  }
}
