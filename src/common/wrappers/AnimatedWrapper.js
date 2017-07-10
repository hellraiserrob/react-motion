import React, { Component } from "react"
// import { TweenMax, Power0 } from 'gsap'

const AnimatedWrapper = WrappedComponent => class AnimatedWrapper extends Component {

    
    constructor(props){

        super(props)

        this.state = {
            wrapperDisplay: 'none'
        }

    }
    
    // setMask(height) {

    //     TweenMax.to(this.mask, 1, {
    //         height: height,
    //         ease: Power0.easeNone
    //     })

    // }


    // componentDidMount() {
    //     console.log('componentDidMount');
    // }

    show(){
        this.setState({
            wrapperDisplay: 'block'
        })
    }

    hide(){
        this.setState({
            wrapperDisplay: 'none'
        })
    }

    componentWillAppear(cb) {
        console.log('componentWillAppear')

        this.show();

        cb();
    }
    componentWillEnter(cb) {
        console.log('componentWillEnter')
        
        setTimeout(() => {
            this.show()
            cb();
        }, 2100);

    }

    componentWillLeave(cb) {

        console.log('componentWillLeave');
        // this.setMask(0);

        setTimeout(() => {
            this.hide()
            cb();
        }, 2000);
    }


    render() {

        const wrapperStyle = {
            display: this.state.wrapperDisplay
        }


        return (

            <div style={wrapperStyle} className="wrapper">

                <h6>
                    animationWrapper
                </h6>

                <div className="mask" ref={(mask) => { this.mask = mask; }} ></div>

                <WrappedComponent {...this.props} />

            </div>

        )
    }
}


export default AnimatedWrapper