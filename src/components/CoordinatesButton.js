// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
    handleClick = event => {
      this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    };
    // onReceiveCoordinates was prop received from index.js
    // here we pass in event data as the argument

    render() {
        return <button onClick={this.handleClick}>Coords</button>
        // calling the handleClick function with this button
    }
}

export default CoordinatesButton;