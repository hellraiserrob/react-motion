import React, { Component } from 'react';
import { TweenMax, Power4 } from 'gsap'

import './carousel.css'

class Carousel extends Component {

    constructor(props) {

        super(props);

        this.slides = new Map()

        this.state = {
            active: 0,
            slides: [{
                id: 1,
                styles: {
                    background: '#fff'
                }
            }, {
                id: 2,
                styles: {
                    background: '#ccc'
                }
            }, {
                id: 3,
                styles: {
                    background: '#fff'
                }
            }]
        };



        this.shrink = this.shrink.bind(this);
        this.move = this.move.bind(this);
        this.expand = this.expand.bind(this);

        this.scroll = this.scroll.bind(this);
        this.bind = this.bind.bind(this);
        this.removeBind = this.removeBind.bind(this);


    }


    shrink() {

        let slides = Array.from(this.slides.values())

        TweenMax.to(slides, 0.75, {
            scale: 0.8,
            ease: Power4.easeIn,
            onComplete: this.move
        })

    }

    move() {

        TweenMax.to(this.track, 0.75, {
            top: -100 * this.state.active + '%',
            ease: Power4.easeIn,
            onComplete: this.expand
        })

    }

    expand() {

        let slides = Array.from(this.slides.values())

        TweenMax.to(slides, 0.75, {
            scale: 1,
            ease: Power4.easeIn,
            onComplete: this.bind
        })

    }


    scroll(e) {

        let active = this.state.active;

        if (e.deltaY > 0) {
            if (active + 1 === this.state.slides.length) {
                return
            }
            active += 1
        }
        else {
            if (active === 0) {
                return
            }
            active -= 1
        }

        this.setState({
            active: active
        });


        this.removeBind()



        this.shrink()

        // TweenMax.to(this.track, 0.75, {
        //     top: -100 * this.state.active + '%',
        //     ease: Power4.easeIn
        // })


        // setTimeout(() => {
        //     this.bind();
        // }, 750)

        // console.log(this.state.active)

    }




    componentDidMount() {
        this.bind()
    }

    componentWillUnmount() {
        this.removeBind();
    }


    bind() {
        window.addEventListener('wheel', this.scroll);
    }

    removeBind() {
        window.removeEventListener('wheel', this.scroll);
    }

    render() {

        let { slides } = this.state

        return (

            <div className="carousel">

                <div className="track" ref={(track) => { this.track = track }}>

                    {slides.map((item, index) => {
                        return <div ref={slide => { this[`slide${index}`] = slide; this.slides.set(index, slide) }} key={index} style={item.styles} className="slide"><div className="number">{item.id}.</div></div>
                    })}

                </div>


                <ul className="pagination">

                    {slides.map((item, index) => {

                        let slideClass = (this.state.active === index) ? 'active' : ''

                        return <li key={index} className={slideClass}>{item.id}</li>
                    })}

                </ul>

            </div>

        );
    }
}

export default Carousel;