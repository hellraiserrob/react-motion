import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
            <li>
                <Link to="/example1">Ex1</Link>
            </li>
            <li>
                <Link to="/example2">Ex2</Link>
            </li>
            <li>
                <Link to="/example3">Ex3</Link>
            </li>
            <li>
                <Link to="/example4">Ex4</Link>
            </li>
        </ul>
        
      </nav>
    );
  }
}

export default Nav;