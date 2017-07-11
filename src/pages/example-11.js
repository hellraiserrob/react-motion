import React, { Component } from 'react'

// import ReactDOM from 'react-dom'
//import { TweenMax, Power0 } from 'gsap'


import AnimatedWrapper from '../common/wrappers/AnimatedWrapper'

import Hero from '../common/hero/hero'

class Page extends Component {

    constructor(props){

        super(props)

        this.state = {
            mask: false
        }

        this.toggle = this.toggle.bind(this)

    }

    toggle(){

        let mask = this.state.mask

        this.setState({
            mask: !mask
        })

    }
   
    render() {

        return (
            <div>
                <h4>Hero</h4>

                <p>An examle of a hero.</p>

                <Hero src="https://unsplash.it/1000/800" width={1000} height={800} mask={this.state.mask} />

                <button onClick={this.toggle}>Toggle</button>
                
            </div>
        );
    }
}

const Wrapper = AnimatedWrapper(Page);
export default Wrapper;