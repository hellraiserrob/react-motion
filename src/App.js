import React, { Component } from 'react';

import 'animate.css/animate.css';
import './App.css';



import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './header/Header';
import Example1 from './pages/example-1';
import Example2 from './pages/example-2';
import Example3 from './pages/example-3';
import Example4 from './pages/example-4';


class App extends Component {
  render() {

    return (
      <Router>

        <div className="App">

          <Header />

          <div className="content">

            <Route path="/example1" component={Example1} />
            <Route path="/example2" component={Example2} />
            <Route path="/example3" component={Example3} />
            <Route path="/example4" component={Example4} />

          </div>


        </div>

      </Router>
    );
  }
}

export default App;
