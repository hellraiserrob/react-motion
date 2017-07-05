import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';


class About extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isOn: false
    };

    this.toggle = this.toggle.bind(this);

  }


  getStyle() {

    let isOn = this.state.isOn;
    let width = (isOn) ? 500 : 50;

    return {
      width: spring(width, {stiffness: 150, damping: 15})
    }
  }


  toggle() {

    let isOn = this.state.isOn;

    this.setState({
      isOn: !isOn
    });

  }

  render() {

    let boxStyle = this.getStyle();

    return (
      <div>

        <Motion style={boxStyle}>

          {interpolatingStyle  => <div className="box" style={interpolatingStyle }></div>}

        </Motion>

        <a onClick={this.toggle} className="btn" >toggle</a>

      </div>
    );
  }
}

export default About;