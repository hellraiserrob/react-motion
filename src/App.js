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
import Example12 from './pages/example-12';
import Example13 from './pages/example-13';


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

          <Route
            exact
            path="/example3"
            children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
                {match && <Example3 {...rest} />}
              </TransitionGroup>
            )} />

          <Route
            exact
            path="/example4"
            children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
                {match && <Example4 {...rest} />}
              </TransitionGroup>
            )} />

          <Route
            exact
            path="/example5"
            children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
                {match && <Example5 {...rest} />}
              </TransitionGroup>
            )} />

          <Route
            exact
            path="/example6"
            children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
                {match && <Example6 {...rest} />}
              </TransitionGroup>
            )} />

          <Route
            exact
            path="/example7"
            children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
                {match && <Example7 {...rest} />}
              </TransitionGroup>
            )} />

          <Route
            exact
            path="/example8"
            children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
                {match && <Example8 {...rest} />}
              </TransitionGroup>
            )} />

          <Route
            exact
            path="/example9"
            children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
                {match && <Example9 {...rest} />}
              </TransitionGroup>
            )} />

          <Route
            exact
            path="/example10"
            children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
                {match && <Example10 {...rest} />}
              </TransitionGroup>
            )} />

          <Route
            exact
            path="/example11"
            children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
                {match && <Example11 {...rest} />}
              </TransitionGroup>
            )} />

          <Route
            exact
            path="/example12"
            children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
                {match && <Example12 {...rest} />}
              </TransitionGroup>
            )} />
          
          <Route
            exact
            path="/example13"
            children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
                {match && <Example13 {...rest} />}
              </TransitionGroup>
            )} />


        </div>

      </Router>
    );
  }
}

export default App;
