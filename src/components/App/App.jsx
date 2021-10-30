import React from 'react';
import axios from 'axios';
import './App.css';
import FormFeeling from '../FormFeeling/FormFeeling';
import FormUnderstanding from '../FormUnderstanding/FormUnderstanding';
import FormSupported from '../FormSupported/FormSupported';
import FormComment from '../FormComment/FormComment';
import Review from '../Review/Review';
import Form from '../Form/Form.jsx';
function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <main>
        <Form formSection="feeling" />
        <Form formSection="understanding" />
        <Form formSection="supported" />
        <Form formSection="comments" />
        <Review />
      </main>
    </div>
  );
}

export default App;
