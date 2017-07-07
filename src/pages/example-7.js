import React, { Component } from 'react';
// import { TransitionMotion, spring } from 'react-motion';


class ex6 extends Component {

    constructor(props){

        super(props)
        console.log('ex7')
        
    }


    componentWillLeave(callback) {
        console.log('componentWillLeave');
        this.animateOut(callback);
    }

    animateOut(callback) {

        console.log('animateOut');

        setTimeout(function () {

            console.log('leave callback');
            callback();

        }, 1000);

    }

    render() {

        return (
            <div>
                7
            </div>
        );
    }
}

export default ex6;