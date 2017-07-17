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
import Example14 from './pages/example-14';
import Example15 from './pages/example-15';


const routes = [{
  path: '/',
  title: '/',
  component: Example1
},{
  path: '/ex1',
  title: 'ex1',
  component: Example1
},{
  path: '/ex2',
  title: 'ex2',
  component: Example2
},{
  path: '/ex3',
  title: 'ex3',
  component: Example3
},{
  path: '/ex4',
  title: 'ex4',
  component: Example4
},{
  path: '/ex5',
  title: 'ex5',
  component: Example5
},{
  path: '/ex6',
  title: 'ex6',
  component: Example6
},{
  path: '/ex7',
  title: 'ex7',
  component: Example7
},{
  path: '/ex8',
  title: 'ex8',
  component: Example8
},{
  path: '/ex9',
  title: 'ex9',
  component: Example9
},{
  path: '/ex10',
  title: 'ex10',
  component: Example10
},{
  path: '/ex11',
  title: 'ex11',
  component: Example11
},{
  path: '/ex12',
  title: 'ex12',
  component: Example12
},{
  path: '/ex13',
  title: 'ex13',
  component: Example13
},{
  path: '/ex14',
  title: 'ex14',
  component: Example14
},{
  path: '/ex15',
  title: 'ex15',
  component: Example15
}]



const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};



class App extends Component {


  render() {

    return (
      <Router>

        <div className="App">

          <Header routes={routes} />

          { /*<Route path="/example1" component={Example1} />
              <Route path="/example2" component={Example2} />*/}

          {routes.map((item, i) => {
            return <Route
              key={i}
              exact
              path={item.path}
              children={({ match, ...rest }) => (
                <TransitionGroup component={firstChild}>
                  {match && <item.component {...rest} />}
                </TransitionGroup>
              )} />
          })}


        </div>

      </Router>
    );
  }
}

export default App;
