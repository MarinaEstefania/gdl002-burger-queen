import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
/* import * as firebase from 'firebase';



  
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
