import React, { Component } from 'react';

// import H1 from '../common/text/h1';
import Nav from './Navigation';

class Header extends Component {
  render() {
    return (
      <header>

        <div className="container">

          <div className="row">

            <div className="column">
              
              { /*<H1 title="Animations" />*/ }
              <Nav />

            </div>

          </div>

        </div>
      </header>
    );
  }
}

export default Header;