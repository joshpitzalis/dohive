import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Timer from '../components/Timer';
import { createTimer } from '../features/activity/actions';
import { connect } from 'react-redux';
import { convertTimersToActivities } from '../features/activity/helpers';

class Activity extends PureComponent {
  static propTypes = {
    timers: PropTypes.array
  };

  render() {
    let activities = convertTimersToActivities(this.props.timers);

    return (
      <div data-black className="vh-100 vw-100 pa10">
        <div className="grid gtc-4 gtr-3 gap2 w-100 h-100 dense">
          {activities &&
            activities.map(timer => (
              <div data-orange className="item pointer" key={timer.id}>
                <Timer
                  id={timer.id && timer.id}
                  title={timer.title && timer.title}
                  elapsedTime={timer.elapsedTime && timer.elapsedTime}
                />
              </div>
            ))}

          <AddTimer />
        </div>
      </div>
    );
  }
}

let select = store => ({
  timers: store.timers
});

export default connect(select)(Activity);

class _AddTimer extends PureComponent {
  render() {
    return (
      <div data-white className="grid x">
        <p onClick={this.props.createTimer} data-testid="createTimer">
          Add Timer
        </p>
      </div>
    );
  }
}

export const AddTimer = connect(
  null,
  { createTimer }
)(_AddTimer);
