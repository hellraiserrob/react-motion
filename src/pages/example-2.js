import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import AnimatedWrapper from '../common/wrappers/AnimatedWrapper'

// import Measure from 'react-measure'

class Page extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isOn: false,
      maxWidth: 600
    };

    this.toggle = this.toggle.bind(this);

  }


  getStyle() {

    let { isOn, maxWidth } = this.state;

    let width = (isOn) ? maxWidth : 0;

    return {
      width: spring(width, { stiffness: 150, damping: 15 })
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


        <h1>Title</h1>

        <p>
          Simple transition of a progress bar
        </p>

        <Motion style={boxStyle}>

          {interpolatingStyle =>
            <div className="progress">
              <div className="bar" style={interpolatingStyle}></div>
            </div>
          }

        </Motion>

        <a onClick={this.toggle} className="button" >toggle</a>


      </div>
    );
  }
}

const Wrapper = AnimatedWrapper(Page);
export default Wrapper;