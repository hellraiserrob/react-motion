import React, { Component } from 'react'

// import ReactDOM from 'react-dom'
//import { TweenMax, Power0 } from 'gsap'


import AnimatedWrapper from '../common/wrappers/AnimatedWrapper'

import Image from '../common/images/image'

class Page extends Component {


   
    render() {

        return (
            <div>
                <h4>Image</h4>

                <p>image example</p>

                <Image src="https://unsplash.it/800/600" width={600} height={200} />
                
                <Image src="https://unsplash.it/600/400" width={300} height={200} />
                
                <Image src="https://unsplash.it/400/200" width={150} height={100} />

            </div>
        );
    }
}

const Wrapper = AnimatedWrapper(Page);
export default Wrapper;

