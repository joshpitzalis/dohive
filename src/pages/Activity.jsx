import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CountDown from '../components/CountDown';

class Activity extends PureComponent {
  static propTypes = {};

  render() {
    return (
      <React.StrictMode>
        <div data-black className="vh-100 vw-100 pa10">
          <div className="grid gtc-4 gtr-3 gap2 w-100 h-100">
            <div data-orange className="item pointer">
              <CountDown />
            </div>,
            <div data-yellow className="item pointer">
              <CountDown />
            </div>
            <div data-red className="item pointer">
              <CountDown />
            </div>
            <div data-yellow className="item pointer">
              <CountDown />
            </div>
            <div data-red className="item pointer">
              <CountDown />
            </div>
            <div data-orange className="item pointer">
              <CountDown />
            </div>
            <div data-yellow className="item pointer">
              <CountDown />
            </div>
            <div data-orange className="item pointer">
              <CountDown />
            </div>
            <div data-red className="item pointer">
              <CountDown />
            </div>
            <div data-yellow className="item pointer">
              <CountDown />
            </div>
            <div data-red className="item pointer">
              <CountDown />
            </div>
            <div data-orange className="item pointer">
              <CountDown />
            </div>
          </div>
        </div>
      </React.StrictMode>
    );
  }
}

export default Activity;
