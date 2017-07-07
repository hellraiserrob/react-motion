import React, { Component } from 'react';

import 'animate.css/animate.css';
import './App.css';



import { BrowserRouter as Router, Route } from 'react-router-dom';

import TransitionGroup from 'react-addons-transition-group' // ES6
// import TransitionGroup from 'react-addons-css-transition-group' // ES6



import Header from './header/Header';
// import Example1 from './pages/example-1';
// import Example2 from './pages/example-2';
// import Example3 from './pages/example-3';
// import Example4 from './pages/example-4';
// import Example5 from './pages/example-5';
// import Example6 from './pages/example-6';
// import Example7 from './pages/example-7';
// import Example8 from './pages/example-8';
import Example9 from './pages/example-9';


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

          <Route
            exact
            path="/example9"
            children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
                {match && <Example9 {...rest} />}
              </TransitionGroup>
            )} />

        
        

        </div>

      </Router>
    );
  }
}

export default App;
