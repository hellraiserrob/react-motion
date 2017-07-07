import React, { Component } from 'react';

import 'animate.css/animate.css';
import './App.css';



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TransitionGroup from 'react-addons-transition-group' // ES6

import Header from './header/Header';
import Example1 from './pages/example-1';
import Example2 from './pages/example-2';
import Example3 from './pages/example-3';
import Example4 from './pages/example-4';
import Example5 from './pages/example-5';
import Example6 from './pages/example-6';
import Example7 from './pages/example-7';


class App extends Component {
  render() {

    return (
      <Router>

        <div className="App">

          <Header />

          <Route render={({ location }) => (
            
            <TransitionGroup>

              <Switch key={location.key} location={location}>

                <Route path="/example1" component={Example1} />
                <Route path="/example2" component={Example2} />
                <Route path="/example3" component={Example3} />
                <Route path="/example4" component={Example4} />
                <Route path="/example5" component={Example5} />
                <Route path="/example6" component={Example6} />
                <Route path="/example7" component={Example7} />

              </Switch>

            </TransitionGroup>

          )} />




        </div>

      </Router>
    );
  }
}

export default App;
