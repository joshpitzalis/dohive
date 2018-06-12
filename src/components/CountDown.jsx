import React, { Component } from 'react';

import { calculateTime } from '../features/activity/helpers';

export default class CountDown extends Component {
  state = {
    timer: calculateTime()
  };

  startTimer = () => {
    this.countDownInterval = setInterval(() => {
      this.setState({ timer: calculateTime(Date.now()) });
    }, 500);
  };

  componentWillUnmount() {
    clearInterval(this.countDownInterval);
  }

  render() {
    const { timer } = this.state;
    return (
      <div className="big b pa3" onClick={() => this.startTimer()}>
        {timer}
      </div>
    );
  }
}
