import React, { Component } from 'react';
// import { Motion, spring } from 'react-motion';
import ReactDOM from 'react-dom'

import { TweenMax, Elastic } from 'gsap';

class Circle extends Component {

    componentDidMount(){

        let { delay, repeatDelay } = this.props;

        let node = ReactDOM.findDOMNode(this);

        TweenMax.to(node, 0.5, {
            x: 100,
            repeat: -1,
            yoyo: true,
            ease: Elastic,
            delay,
            repeatDelay
        })

    }

    render() {
        return (
            <div className="circle">
                circle
            </div>
        );
    }
}

export default Circle;