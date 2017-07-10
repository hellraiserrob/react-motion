import React, { Component } from 'react';

import 'animate.css/animate.css';
import './App.css';



import { BrowserRouter as Router, Route } from 'react-router-dom';

import TransitionGroup from 'react-addons-transition-group' // ES6
// import TransitionGroup from 'react-addons-css-transition-group' // ES6



import Header from './header/Header';
import Example1 from './pages/example-1';
import Example2 from './pages/example-2';
import Example3 from './pages/example-3';
import Example4 from './pages/example-4';
import Example5 from './pages/example-5';
import Example6 from './pages/example-6';
import Example7 from './pages/example-7';
import Example8 from './pages/example-8';
import Example9 from './pages/example-9';
import Example10 from './pages/example-10';
import Example11 from './pages/example-11';


const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};



class App extends Component {


  render() {

    return (
      <Router>

        <div className="App">

          <Header />

          <div className="container">

            <div className="row">

              <div className="column">

                { /*<Route path="/example1" component={Example1} />
              <Route path="/example2" component={Example2} />*/}

                <Route
                  exact
                  path="/example1"
                  children={({ match, ...rest }) => (
                    <TransitionGroup component={firstChild}>
                      {match && <Example1 {...rest} />}
                    </TransitionGroup>
                  )} />

                <Route
                  exact
                  path="/example2"
                  children={({ match, ...rest }) => (
                    <TransitionGroup component={firstChild}>
                      {match && <Example2 {...rest} />}
                    </TransitionGroup>
                  )} />


                <Route path="/example3" component={Example3} />
                <Route path="/example4" component={Example4} />
                <Route path="/example5" component={Example5} />
                <Route path="/example6" component={Example6} />
                <Route path="/example7" component={Example7} />
                <Route path="/example8" component={Example8} />
                <Route path="/example9" component={Example9} />
                <Route path="/example10" component={Example10} />
                <Route path="/example11" component={Example11} />

              </div>

            </div>

          </div>







        </div>

      </Router>
    );
  }
}

export default App;
