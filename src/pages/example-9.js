import React, { Component } from 'react'

import AnimatedWrapper from '../common/wrappers/AnimatedWrapper'

import More from '../common/more/more'

class Page extends Component {
    
    render() {

        return (
            <More />
        );
    }
}




const Wrapper = AnimatedWrapper(Page);
export default Wrapper;