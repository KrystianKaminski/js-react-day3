import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Paper from './components/Paper'
import Counter from './Counter';
import Navigation from './Navigation/Navigation'


const App = (props) => (
  <div>
    <Router>
      <div>
        <Navigation
          label="Twoja Kaloria"
        >
          <Link to='/'>Dashboard</Link>
          <Link to='/counter'>Counter</Link>
        </Navigation>
        <Route path="/counter" exact={true} component={() => <Counter startNumber={5}/>} 
        />
      </div>
    </Router>
  </div>
)


export default App;
