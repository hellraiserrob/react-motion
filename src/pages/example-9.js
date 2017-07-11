import React, { Component } from 'react'

import AnimatedWrapper from '../common/wrappers/AnimatedWrapper'

class Page extends Component {
    
    render() {

        return (
            <div>
                Nothing page
            </div>
        );
    }
}




const Wrapper = AnimatedWrapper(Page);
export default Wrapper;