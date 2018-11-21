import React from 'react';
import Button from './components/Button';
import Paper from './components/Paper'


const App = (props) => (
  <Paper>
    <Button
      onClick={() => alert('fafd')}
    />
     <Button
      onClick={() => alert('fafd')}
    />
  </Paper>
)


export default App;
