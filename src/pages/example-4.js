import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

import AnimatedWrapper from '../common/wrappers/AnimatedWrapper'

class Page extends Component {

    constructor(props) {

        super(props);

        this.state = {
            isOn: false
        };

        this.scroll = this.scroll.bind(this);
        this.bind = this.bind.bind(this);
        this.removeBind = this.removeBind.bind(this);
        this.fin = this.fin.bind(this);

    }


    getStyle(index) {

        let isOn = this.state.isOn;
        let width = (isOn) ? 500 : 50;
        let stiffness = 75 * index;

        return {
            width: spring(width, { stiffness: stiffness, damping: 15 })
        }
    }


    scroll(e) {

        console.log(e.deltaY);

        let isOn = this.state.isOn;

        this.setState({
            isOn: !isOn
        });


        this.removeBind();

    }

    fin() {
        this.bind();
    }


    componentDidMount() {
        this.bind();
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


        let boxes = [1, 2];


        return (
            <div>

                <h4>Progress bar</h4>

                <p>
                    A mouse wheel binding example
                </p>

                {boxes.map((index) => {

                    let boxStyle = this.getStyle(index);

                    return (
                        <Motion style={boxStyle} onRest={this.fin} key={index}>

                            {interpolatingStyle => 
                                <div className="progress">
                                    <div className="bar" style={interpolatingStyle}></div>
                                </div>
                            }

                        </Motion>
                    );
                })}

                

            </div>
        );
    }
}

const Wrapper = AnimatedWrapper(Page);
export default Wrapper;