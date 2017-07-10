import React, { Component } from 'react';
import classNames from 'classnames';

import './hero.css'


class Hero extends Component {

    constructor(props) {

        super(props)

        this.state = {
            isLoaded: false,
            mask: 'none'
        }

        this.loaded = this.loaded.bind(this)


    }

    loaded() {

        this.setState({
            isLoaded: true
        })

    }

    error() {

        console.log('error');

    }



    render() {

        let heroStyle = {
            width: this.props.width,
            height: this.props.height,
        }

        let heroClass = classNames({
            hero: true,
            ready: this.props.mask
        })

        let imgClass = classNames({
            'loaded': this.state.isLoaded,
            masked: this.props.mask
        })

        

        return (

            <div  className={heroClass} style={heroStyle}>

                <div className="text">
                    <h1>Title</h1>
                    <p>Now we are reading.</p>
                </div>

                <img src={this.props.src} alt="buildings" onLoad={this.loaded} onError={this.error} className={imgClass} />

            </div>

        );
    }
}

export default Hero;