import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
            <li>
                <NavLink to="/example1" activeClassName="active">Ex1</NavLink>
            </li>
            <li>
                <NavLink to="/example2" activeClassName="active">Ex2</NavLink>
            </li>
            <li>
                <NavLink to="/example3" activeClassName="active">Ex3</NavLink>
            </li>
            <li>
                <NavLink to="/example4" activeClassName="active">Ex4</NavLink>
            </li>
            <li>
                <NavLink to="/example5" activeClassName="active">Ex5</NavLink>
            </li>
            <li>
                <NavLink to="/example6" activeClassName="active">Ex6</NavLink>
            </li>
            <li>
                <NavLink to="/example7" activeClassName="active">Ex7</NavLink>
            </li>
            <li>
                <NavLink to="/example8" activeClassName="active">Ex8</NavLink>
            </li>
            <li>
                <NavLink to="/example9" activeClassName="active">Ex9</NavLink>
            </li>
            <li>
                <NavLink to="/example10" activeClassName="active">Ex10</NavLink>
            </li>
            <li>
                <NavLink to="/example11" activeClassName="active">Ex11</NavLink>
            </li>
            <li>
                <NavLink to="/example12" activeClassName="active">Ex12</NavLink>
            </li>
            <li>
                <NavLink to="/example13" activeClassName="active">Ex13</NavLink>
            </li>
        </ul>
        
      </nav>
    );
  }
}

export default Nav;