import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';

// Initialize Firebase
 var config = {
    apiKey: "AIzaSyDRQlTV6uPoC4sbAsFoFyWxLJs4DpTMeSw",
    authDomain: "my-first-list.firebaseapp.com",
    databaseURL: "https://my-first-list.firebaseio.com",
    projectId: "my-first-list",
    storageBucket: "my-first-list.appspot.com",
    messagingSenderId: "315375106443"
  };
  firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));