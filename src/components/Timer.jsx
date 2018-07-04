import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { saveTime, saveTitle } from '../features/activity/actions';
import { getSeconds, getMinutes } from '../features/activity/helpers';

class Timer extends PureComponent {
  state = {
    elapsedTime: 0,
    running: false,
    id: null,
    title: ''
  };

  // tk the problme is that you only wnat to update stae from props once on component did mount and then you want to control it from component state. so effectively you wnat to use both
  static getDerivedStateFromProps(nextProps) {
    if (nextProps.elapsedTime) {
      return { elapsedTime: nextProps.elapsedTime };
    }
    // if (nextProps.title) {
    //   return { title: nextProps.title };
    // }
    if (nextProps.id) {
      return { id: nextProps.id };
    }
  }

  handleStart = () => {
    this.setState({
      running: true
    });
    this.timer = setInterval(
      () => this.setState(state => ({ elapsedTime: state.elapsedTime + 1 })),
      1000
    );
  };

  handleStop = () => {
    this.setState({
      running: false
    });
    clearInterval(this.timer);
    this.props.saveTime(
      this.state.elapsedTime,
      this.state.id,
      this.state.title
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    saveTitle(this.state.elapsedTime, this.state.id, this.state.title);
  };

  render() {
    let { saveTitle } = this.props;
    return (
      <div className="big b pa3" data-testid="timer">
        <div>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input
              type="text"
              onChange={e => this.setState({ title: e.target.value })}
              data-testid="tagActivity"
            />
            <input type="submit" />
          </form>
          <p>{this.state.title}</p>

          <h1 data-testid="timerTime">
            {getMinutes(this.state.elapsedTime)}:{getSeconds(
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

export default connect(
  null,
  { saveTime, saveTitle }
)(Timer);
