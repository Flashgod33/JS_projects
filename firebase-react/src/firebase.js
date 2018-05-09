import firebase from 'firebase';
 
  const config = {
    apiKey: "AIzaSyCLXe8I5ukK1xPSI_f-wZiNzR9XjvwNs6w",
    authDomain: "first-project-65430.firebaseapp.com",
    databaseURL: "https://first-project-65430.firebaseio.com",
    projectId: "first-project-65430",
    storageBucket: "first-project-65430.appspot.com",
    messagingSenderId: "78707650628"
  };

  var fire = firebase.initializeApp(config);
  
  export default fire;

  export const database = firebase.database();
