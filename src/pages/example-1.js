import React, { Component } from 'react';

import Error from '../common/alerts/error';

import classNames from 'classnames';


class Landing extends Component {

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
      error: true,
      animated: true,
      'bounce': this.state.isOn,
    });
    
    let btnClass = classNames({
      btn: true,      
      disabled: !this.state.isOn,
    });

    return (
      <div>
        <Error msg="This is the alert" css={alertClass} />
        <a onClick={this.toggle} className={btnClass}>toggle</a>
      </div>
    );
  }
}

export default Landing;