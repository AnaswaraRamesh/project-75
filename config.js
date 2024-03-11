import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyC9d3Ik0wKBm98VXtmpe6rFVxmsRKQw2kY",
  authDomain: "project-71-9e426.firebaseapp.com",
  projectId: "project-71-9e426",
  storageBucket: "project-71-9e426.appspot.com",
  messagingSenderId: "829406674976",
  appId: "1:829406674976:web:542a672164019f63f4bc45"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
