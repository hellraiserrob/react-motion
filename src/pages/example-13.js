import React, { Component } from 'react'

import AnimatedWrapper from '../common/wrappers/AnimatedWrapper'

import { TweenMax, Power1 } from 'gsap'
import '../vendor/DrawSVGPlugin.min'

class Page extends Component {

    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.random = this.random.bind(this)
        this.modify = this.modify.bind(this)

    }


    componentDidMount() {

        TweenMax.set([this.path1], {
            drawSVG: `10% 90%`,
            visibility: "visible"
        });

    }

    toggle() {

        let start = this.random(1, 50)
        let finish = this.random(51, 100)

        this.modify(this.path1, start, finish)
        // this.modify(this.path2, start, finish)
        

    }


    modify(path, start, finish){

        TweenMax.to(path, 1, {
            drawSVG: `${start}% ${finish}%`,
            ease: Power1.easeInOut,
            onComplete: () => {
                console.log('complete')
            }
        });

    }

    random(min, max) {
        return Math.random() * (max - min) + min;
    }

    render() {

        return (

            <div className="svgExample">
                
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 516.3 250" >
                    <path id="template" d="M9.13,99.99c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37" />
                    <path ref={(path) => { this.path1 = path; }} d="M9.13,99.99c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37" />
                </svg>
            
            
                <button onClick={this.toggle}>Change</button>
            </div>

        );
    }
}

const Wrapper = AnimatedWrapper(Page);
export default Wrapper;