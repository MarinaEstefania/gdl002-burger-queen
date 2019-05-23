import firebase from 'firebase';

//Web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyB_yVvrnR9-W9DbbxVi2yx53O49jL4wPaM",
    authDomain: "burger-queen-gdl002.firebaseapp.com",
    databaseURL: "https://burger-queen-gdl002.firebaseio.com",
    projectId: "burger-queen-gdl002",
/*     storageBucket: "burger-queen-gdl002.appspot.com",
    messagingSenderId: "14744371401", */
    appId: "1:14744371401:web:b161951d0904c8ce"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;


