import React, { Component } from 'react'

// import ReactDOM from 'react-dom'
import { TweenMax, Power0 } from 'gsap';

class ex9 extends Component {


    setMask(height){

        

        TweenMax.to(this.mask, 1, {
            height: height,
            ease: Power0.easeNone
        })

    }

    componentDidMount(){
        console.log('componentDidMount');

        this.setMask('100%');


    }

    // componentWillAppear(callback){
    //     console.log('componentWillAppear');

    //     this.setMask(0);

    //     callback();
    // }

    // componentWillEnter(callback){
    //     console.log('componentWillEnter');

    //     this.setMask(0);
    //     this.setMask(0);

    //     callback();
    // }

    // componentDidEnter(){
    //     console.log('componentDidEnter');
    //     this.setMask(0);

    // }

    

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

export default ex9;