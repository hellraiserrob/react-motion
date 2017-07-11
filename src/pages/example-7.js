import React, { Component } from 'react'
import Circle from '../common/primatives/circle'

import AnimatedWrapper from '../common/wrappers/AnimatedWrapper'

class Page extends Component {


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

const Wrapper = AnimatedWrapper(Page);
export default Wrapper;