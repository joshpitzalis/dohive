import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Timer from '../components/Timer';

class Activity extends PureComponent {
  static propTypes = {};

  render() {
    return (
      <React.StrictMode>
        <div data-black className="vh-100 vw-100 pa10">
          <div className="grid gtc-4 gtr-3 gap2 w-100 h-100 dense">
            <div data-orange className="item pointer">
              <Timer />
            </div>
            <div data-yellow className="item pointer">
              <Timer />
            </div>
            <div data-red className="item pointer span-c2">
              <Timer />
            </div>
            <div data-yellow className="item pointer">
              <Timer />
            </div>
            <div data-red className="item pointer">
              <Timer />
            </div>
            <div data-orange className="item pointer">
              <Timer />
            </div>
            <div data-yellow className="item pointer ">
              <Timer />
            </div>
            <div data-orange className="item pointer span-r2">
              <Timer />
            </div>
            <div data-red className="item pointer">
              <Timer />
            </div>
            <div data-yellow className="item pointer">
              <Timer />
            </div>
            <div data-red className="item pointer">
              <Timer />
            </div>
            <div data-orange className="item pointer">
              <Timer />
            </div>
          </div>
        </div>
      </React.StrictMode>
    );
  }
}

export default Activity;
