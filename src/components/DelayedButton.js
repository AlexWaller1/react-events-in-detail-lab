// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
    handleClick = event => {
        event.persist();
        window.setTimeout(() => {
            this.props.onDelayedClick(event);
        }, this.props.delay);
    };
     // takes in props of function onDelayedClick and delay which is a number.
     // window.setTimout() sets a timer which executes a function or specified 
     // piece of code once the timer expires.
     //

    render() {
        return <button onClick={this.handleClick}>Delayed</button>;
    }
}

export default DelayedButton;