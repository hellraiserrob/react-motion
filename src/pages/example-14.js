import React, { Component } from 'react'

import AnimatedWrapper from '../common/wrappers/AnimatedWrapper'

import * as PIXI from 'pixi.js';
// import 'pixi-display';

import Image from '../common/more/more.png'


class Page extends Component {



    componentDidMount() {

        var app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });
        this.canvas.appendChild(app.view);

        // create a new Sprite from an image path
        var bunny = PIXI.Sprite.fromImage(Image)

        bunny.interactive = true;

        // center the sprite's anchor point
        bunny.anchor.set(0.5);

        // move the sprite to the center of the screen
        bunny.x = app.renderer.width / 2;
        bunny.y = app.renderer.height / 2;

        app.stage.addChild(bunny);

        // Listen for animate update
        app.ticker.add(function (delta) {
            // just for fun, let's rotate mr rabbit a little
            // delta is 1 if running at 100% performance
            // creates frame-independent tranformation
            //bunny.rotation += 0.1 * delta;
        });




    }

    render() {

        return (

            <div ref={(canvas) => { this.canvas = canvas }}></div>

        );
    }
}

const Wrapper = AnimatedWrapper(Page);
export default Wrapper;