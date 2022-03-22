import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAJ9vKM-YgYI0Xc9gvOk91mBnC8HZISh0g",
  authDomain: "port-4cafe.firebaseapp.com",
  databaseURL: "https://port-4cafe-default-rtdb.firebaseio.com",
  projectId: "port-4cafe",
  storageBucket: "port-4cafe.appspot.com",
  messagingSenderId: "502471255869",
  appId: "1:502471255869:web:16513d0beb499192aa8754",
  measurementId: "G-9WSGGJTZTY"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;