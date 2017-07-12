import React, { Component } from 'react';
import './more.css'

import moreIcon from './more.png'

class More extends Component {

    render() {

        return (

            <div  className="more">

                <img src={moreIcon} alt="more" />

            </div>

        );
    }
}

export default More;