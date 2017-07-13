import React, { Component } from 'react';
import AnimatedWrapper from '../common/wrappers/AnimatedWrapper'
// import Error from '../common/alerts/error';

import classNames from 'classnames';


class Page extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isOn: false
    };

    this.toggle = this.toggle.bind(this);

  }

  toggle() {

    console.log('toggle');

    let isOn = this.state.isOn;

    this.setState({
      isOn: !isOn
    });

  }



  render() {

    let alertClass = classNames({
      animated: true,
      'bounce': this.state.isOn,
    });
    
    let btnClass = classNames({
      button: true,      
      disabled: !this.state.isOn,
    });

    return (
      <div>
        
        <h1>Title</h1>

        <p>
          A simple class toggle to introduce an animation
        </p>

        <blockquote className={alertClass}>This is a quote</blockquote>

        <a onClick={this.toggle} className={btnClass}>toggle</a>
      </div>
    );
  }
}

const Wrapper = AnimatedWrapper(Page);
export default Wrapper;