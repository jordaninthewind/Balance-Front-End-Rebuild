import React, { PureComponent } from 'react';
import Clock from './Clock';

class TimerContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      time: 0
    };
  }

  render() {
    return (
      <div className="App-component">
        <Clock />
      </div>
    );
  }
}

export default TimerContainer;
