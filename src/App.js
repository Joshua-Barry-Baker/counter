import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './componets/Nav.js';

function App() {
  return (
    <Router>
      <Nav />
        <Switch>
        </Switch>
    </Router>
  )
}

export default App;