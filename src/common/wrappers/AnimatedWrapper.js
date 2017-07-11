import React, { Component } from "react"
import { TweenMax, Power4 } from 'gsap'

const AnimatedWrapper = WrappedComponent => class AnimatedWrapper extends Component {

    
    constructor(props){

        super(props)

        this.state = {
            wrapperDisplay: 'none'
        }

    }
    
    animateMask(maskStyles) {

        TweenMax.to(this.mask, 0.5, {
            height: maskStyles.height,
            ease: Power4.easeIn
        })

    }

    setMask(maskStyles) {

        TweenMax.set(this.mask, maskStyles)

    }


    // componentDidMount() {
    //     console.log('componentDidMount');
    // }

    show(){
        this.setState({
            wrapperDisplay: 'block'
        })

        this.animateMask({
            height: 0
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

            this.setMask({
                height: '100%'
            })

            this.show()

            this.animateMask({
                height: 0
            })


            cb();
        }, 600);

    }

    componentWillLeave(cb) {

        console.log('componentWillLeave');

        this.animateMask({
            height: '100%'
        });

        setTimeout(() => {
            this.hide()
            cb();
        }, 600);
    }


    render() {

        const wrapperStyle = {
            display: this.state.wrapperDisplay
        }


        return (

            <div>
                
                <div className="mask" ref={(mask) => { this.mask = mask; }} ></div>

                <div style={wrapperStyle} className="wrapper">

                    <h6>
                        animationWrapper
                    </h6>


                    <WrappedComponent {...this.props} />

                </div>

            </div>

        )
    }
}


export default AnimatedWrapper