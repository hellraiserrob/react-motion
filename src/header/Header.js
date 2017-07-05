import React, { Component } from 'react';

import H1 from '../common/text/h1';
import Nav from './Navigation';

class Header extends Component {
  render() {
    return (
      <header>
        <H1 title="Animations" />
        <Nav />
      </header>
    );
  }
}

export default Header;