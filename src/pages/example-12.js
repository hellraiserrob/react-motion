import React, { Component } from 'react'

import AnimatedWrapper from '../common/wrappers/AnimatedWrapper'

import Carousel from '../common/carousel/carousel'

class Page extends Component {
   
    render() {

        return (
            <div>
                
                <Carousel />
                
            </div>
        );
    }
}

const Wrapper = AnimatedWrapper(Page);
export default Wrapper;