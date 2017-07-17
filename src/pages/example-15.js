import React, { Component } from 'react'

import AnimatedWrapper from '../common/wrappers/AnimatedWrapper'

import Mouse from '../common/mouse/mouse'

class Page extends Component {



    render() {
        
        return (
            
            <div className="middle">
                <Mouse />
            </div>
            
        );
    }
}

const Wrapper = AnimatedWrapper(Page);
export default Wrapper;