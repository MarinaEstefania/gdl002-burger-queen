import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
/* import * as firebase from 'firebase';

//Web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB_yVvrnR9-W9DbbxVi2yx53O49jL4wPaM",
    authDomain: "burger-queen-gdl002.firebaseapp.com",
    databaseURL: "https://burger-queen-gdl002.firebaseio.com",
    projectId: "burger-queen-gdl002",
    storageBucket: "burger-queen-gdl002.appspot.com",
    messagingSenderId: "14744371401",
    appId: "1:14744371401:web:b161951d0904c8ce"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  const auth = firebase.auth();
  const database = firebase.database();

  export {
    auth,
    database,
  }; */

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
