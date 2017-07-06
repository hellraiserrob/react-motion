import React, { Component } from 'react';
import { TransitionMotion, spring } from 'react-motion';


class ex5 extends Component {

    constructor(props) {

        super(props);

        // this.getStyle = this.getStyle.bind(this);
        this.willLeave = this.willLeave.bind(this);
        this.removeItem = this.removeItem.bind(this);


        this.state = {
            boxes: [{ key: 'a', size: 100 }, { key: 'b', size: 200 }, { key: 'c', size: 120 }]
        };


    }


    // componentDidMount() {
    //     this.setState({
    //         boxes: [{ key: 'a', size: 10 }]
    //     });
    // };

    // getStyle() {
    //     return {
    //         width: spring(500),
    //         height: spring(500)
    //     }
    // }


    willLeave() {
        // triggered when c's gone. Keeping c until its width/height reach 0.
        return {
            width: spring(0),
            height: spring(0)
        };
    }


    removeItem(box) {
                
        let boxes = this.state.boxes.filter((item) => {
            return item.key !== box.key;
        });

        this.setState({
            boxes
        });

    }



    render() {

        return (
            <TransitionMotion willLeave={this.willLeave}
                styles={this.state.boxes.map(item => ({
                    key: item.key,
                    style: { width: item.size, height: item.size }
                }))}>

                {interpolatedStyles =>
                    // first render: a, b, c. Second: still a, b, c! Only last one's a, b.
                    <div>
                        {interpolatedStyles.map(config => {
                            return <div className="square" onClick={() => this.removeItem(config)} key={config.key} style={{ ...config.style }}></div>
                        })}
                    </div>
                }

            </TransitionMotion>
        );
    }
}

export default ex5;