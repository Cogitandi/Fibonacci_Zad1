import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from './Main';
import Fib from './Fib';
import History from './History';
import Documentation from './Documentation';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Route exact path="/" exact component={Main} />
          <Route exact path="/fibcal" exact component={Fib} />
          <Route exact path="/history" exact component={History} />
          <Route exact path="/docs" component={Documentation} />
        </div>
      </div>
    </Router>
  );
}

export default App;
