import React, { Component } from 'react'
import Circle from '../common/primatives/circle2'
import ReactDOM from 'react-dom'
import { TimelineMax, Power4 } from 'gsap';

// import AnimatedWrapper from '../common/wrappers/AnimatedWrapper'

class Page extends Component {

    constructor(props) {

        super(props)

        this.state = {
            circles: [{
                ref: 'one'
            }, {
                ref: 'two'
            }]
        }

    }    

    componentDidMount(){

        let tl = new TimelineMax({
            repeat: -1,
            yoyo: true
        })

        this.state.circles.forEach((item) => {
            
            // console.log(item);

            let node = ReactDOM.findDOMNode(this.refs[item.ref]);

            tl.to(node, 1.5, {
                x: 500,
                ease: Power4.easeOut
            })


        });

    }


    render() {


        return (
            <div>

                <div className="mask" ref={(mask) => { this.mask = mask; }} ></div>

                <p>
                    Greensock timelineMax example
                </p>

                {this.state.circles.map((item, index) => {
                    return <Circle ref={item.ref} key={index} />
                })}




            </div>
        );
    }
}

// const ex8 = AnimatedWrapper(Page);
export default Page;