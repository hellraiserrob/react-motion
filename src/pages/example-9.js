import React, { Component } from 'react'

// import ReactDOM from 'react-dom'
import { TweenMax, Power0 } from 'gsap'


// import AnimatedWrapper from '../common/wrappers/AnimatedWrapper'

class Page extends Component {


    setMask(height) {

        TweenMax.to(this.mask, 1, {
            height: height,
            ease: Power0.easeNone
        })

    }


    componentDidMount(){
        console.log('componentDidMount');

        this.setMask('100%');
    }

    componentWillLeave(callback) {

        console.log('componentWillLeave');
        this.setMask(0);

        setTimeout(() => {
            callback();
        }, 1000);
    }

    
    render() {

        return (
            <div>
                <div className="mask" ref={(mask) => { this.mask = mask; }} ></div>
                page transition example
            </div>
        );
    }
}



// const ex9 = AnimatedWrapper(Page);
export default Page;