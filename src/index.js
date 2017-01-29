import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBnaFmkAfls8iMSO7cu7neGA2-tumO9g7M",
  authDomain: "meal-shopping-planner.firebaseapp.com",
  databaseURL: "https://meal-shopping-planner.firebaseio.com",
  storageBucket: "meal-shopping-planner.appspot.com",
  messagingSenderId: "155689214491"
};

firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
