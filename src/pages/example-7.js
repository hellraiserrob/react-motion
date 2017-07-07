import React, { Component } from 'react'
import Circle from '../common/primatives/circle'

class ex6 extends Component {

    

    render() {

        return (
            <div>
                <p>
                    Greensock tweenMax example
                </p>
                <Circle delay={0} repeatDelay={0} />
                <Circle delay={0.25} repeatDelay={0} />
            </div>
        );
    }
}

export default ex6;