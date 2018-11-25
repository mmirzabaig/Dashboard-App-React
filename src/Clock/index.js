import React  from 'react';
import Clock from 'react-live-clock';

export default class ClockComponent extends React.Component {
    render() {
      return(
        <Clock format={'hh:mm:ss'} ticking={true} timezone={'US/Central'} />
      );
    }
}
