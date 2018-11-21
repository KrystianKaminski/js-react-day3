import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem';

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
        <MenuItem>
          <Link to='/'>Dashboard</Link>
        </MenuItem>
        <MenuItem>
          <Link to='/counter'>Counter</Link>
        </MenuItem>
        </Navigation>
        <Route path="/counter" exact={true} component={() => <Counter startNumber={5}/>} 
        />
      </div>
    </Router>
  </div>
)


export default App;
