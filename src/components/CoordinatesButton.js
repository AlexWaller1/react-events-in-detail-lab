// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
    handleClick = event => {
    // onReceiveCoordinate is prop conatining the function mouseCoordinates
      this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    };
    // onReceiveCoordinates was prop received from index.js
    // here we pass in event data as the argument
    // the clientX read-only property of the MouseEvent interface provides the horizontal coordinate
    // within the application's viewport at which the event occurred (as opposed to the coordinate
    // within the page).
    // For example, clicking on the left edge of the viewport will always result in a mouse event
    // with a clientX value of 0, regardless of whether the page is scrolled horizontally
    // the clientY read-only property of the MouseEvent interface provides the vertical coordinate.

    render() {
        return <button onClick={this.handleClick}>Coords</button>
        // calling the handleClick function with this button
    }
}

export default CoordinatesButton;