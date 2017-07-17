import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import './navigation.css'

class Nav extends Component {

	constructor(props){

		super(props)

		this.state = {
			isOpen: false
		}

		this.toggle = this.toggle.bind(this)

	}

	toggle(){

		let isOpen = this.state.isOpen

		this.setState({
			isOpen: !isOpen
		})

	}

	render() {

		let maskStyle = {
			transform: this.state.isOpen ? 'translateX(0)' : 'translateX(-100%)'
		}

		let navStyle = {
			transform: this.state.isOpen ? 'translateX(0)' : 'translateX(-300px)'
		}

		let toggleClass = classNames({
			toggle: true,      
			closed: !this.state.isOpen,      
			open: this.state.isOpen,
		});

		return (

			<div>
			
				<div className="navMask" style={maskStyle}></div>

				<nav style={navStyle}>

					<a className={toggleClass} onClick={this.toggle}>
						<span className="line"></span>
						<span className="line line-bottom"></span>
					</a>

					<h6>Contents</h6>

					<ul>
						{this.props.routes.map((route, i)=> {
							return <li key={i}>
								<NavLink onClick={this.toggle} to={route.path} activeClassName="active">{route.title}</NavLink>
							</li>
						})}
						
					</ul>

				</nav>
			
			</div>

			
			);
		}
	}

export default Nav;