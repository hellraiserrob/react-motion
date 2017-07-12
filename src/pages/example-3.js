import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

import AnimatedWrapper from '../common/wrappers/AnimatedWrapper'


class Page extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isOn: false
    };

    this.toggle = this.toggle.bind(this);

  }


  getStyle(index) {

    let isOn = this.state.isOn;
    let width = (isOn) ? 500 : 50;
    let stiffness = 75 * index;

    return {
      width: spring(width, {stiffness: stiffness, damping: 15})
    }
  }


  toggle() {

    let isOn = this.state.isOn;

    this.setState({
      isOn: !isOn
    });

  }

  fin(){
    console.log('fin');
  }


  render() {


    let boxes = [1, 2, 3];


    return (
      <div>

        <h4>Progress bar</h4>

        <p>
            Multiple progress examples
        </p>

        {boxes.map((index) => {
            
            let boxStyle = this.getStyle(index);

            return (
                <Motion style={boxStyle} onRest={this.fin} key={index}>
                    
                    {interpolatingStyle  => 
                      <div className="progress">
                        <div className="bar" style={interpolatingStyle }></div>
                      </div>
                    }

                </Motion>
            );
        })}

  

        <a onClick={this.toggle} className="button">toggle</a>

      </div>
    );
  }
}


const Wrapper = AnimatedWrapper(Page);
export default Wrapper;