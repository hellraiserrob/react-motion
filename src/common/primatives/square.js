import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

class Square extends Component {

    constructor(props){
        
        super(props)

        this.state = {
            size: {
                width: 0,
                height: 0,
                marginBottom: 0
            }
        }

    }


    componentDidEnter(){

        console.log('componentWillAppear');

        this.expand();

        // callback();
    }

    componentWillLeave(callback) {
        this.animateOut(callback);
    }

    animateOut(callback) {

        console.log('animateOut');
        this.collapse();

        setTimeout(function () {

            console.log('leave callback');
            callback();

        }, 1000);

    }


    expand(){

        let size = {
            width: spring(200),
            height: spring(200),
            marginBottom: spring(20)
        }

        this.setState({
            size
        });
    }

    collapse(){

        let size = {
            width: spring(0),
            height: spring(0),
            marginBottom: spring(0)
        }

        this.setState({
            size
        });
    }

    render() {
        return (
            <Motion style={this.state.size}>

                {interpolatingStyle => <div className="square" style={interpolatingStyle}></div>}

            </Motion>
        );
    }
}

export default Square;