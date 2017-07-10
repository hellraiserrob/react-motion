import React, { Component } from 'react';
import classNames from 'classnames';

import './image.css'


class Image extends Component {

    constructor(props){

        super(props)

        this.state = {
            isLoaded: false
        }

        // this.preload = this.preload.bind(this)
        this.loaded = this.loaded.bind(this)
        this.error = this.error.bind(this)

    }

    
    loaded(){

        console.log('loaded');

        this.setState({
            isLoaded: true
        })

    }

    error(){
        console.log('error');
    }




    render() {

        let wrapperStyle = {
            width: this.props.width,
            height: this.props.height
        }

        let imgClass = classNames({
            animated: true,
            'loaded': this.state.isLoaded,
        });

        return (
            <div className="imageWrapper" style={wrapperStyle}>
                <div className="image">
                    <img alt="mountains" src={this.props.src} onLoad={this.loaded} onError={this.error} className={imgClass} />
                </div>
            </div>
        );
    }
}

export default Image;