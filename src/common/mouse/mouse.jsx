import React, { Component } from 'react'

import { TimelineMax, Power4 } from 'gsap';


import './mouse.css'

class Mouse extends Component {


    componentDidMount(){
        
        let T = new TimelineMax({
            repeat: -1
        })

        T.to(this.wheel, 1, {
            bottom: 32,
            ease: Power4.easeIn
        }).to(this.wheel, 1, {
            top: 50,
            ease: Power4.easeIn
        })
    }

    render() {
        
        return (
            
            <div className="mouse">
                <div className="wheel" ref={(wheel) => {this.wheel = wheel}}></div>
            </div>
            
        );
    }
}


export default Mouse;