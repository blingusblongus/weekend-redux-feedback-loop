import React from 'react';
import axios from 'axios';
import './App.css';
import Review from '../Review/Review';
import Form from '../Form/Form.jsx';
import Admin from '../Admin/Admin';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <main>
          <Route path="/" exact>
            <Form formSection="feeling" />
          </Route>

          <Route path="/understanding">
            <Form formSection="understanding" />
          </Route>

          <Route path="/support">
            <Form formSection="support" />
          </Route>

          <Route path="/comments">
            <Form formSection="comments" />
          </Route>

          <Route path="/review">
            <Review />
          </Route>
          
          <Route path="/admin">
            <Admin />
          </Route>
        </main>
      </div>
    </Router>
  );
}

export default App;
