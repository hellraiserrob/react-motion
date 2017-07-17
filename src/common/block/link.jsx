import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './link.css'



class BlockLink extends Component {

    render() {
        
        let { title, url } = this.props

        return (
            
            <Link to={url} className="block-link">
                <h2>{title}</h2>
                <p>Go to this page</p>
            </Link>
            
        );
    }
}


export default BlockLink;