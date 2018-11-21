import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Paper from './components/Paper'
import Counter from './Counter';
import Navigation from './Navigation/Navigation'


const App = (props) => (
  <div>
    <Router>
      <div>
        <Route path="/counter" exact={true} component={Counter} />
        <Route path="/" exact={true} component={Navigation} />
      </div>
    </Router>
  </div>
)


export default App;
