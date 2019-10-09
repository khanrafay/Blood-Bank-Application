import firebase from 'firebase/app';
import 'firebase/firestore';




  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCsKYI_IIigGSZrx82c3y__JtfHtKz6mhE",
    authDomain: "my-blood-bank-e5acc.firebaseapp.com",
    databaseURL: "https://my-blood-bank-e5acc.firebaseio.com",
    projectId: "my-blood-bank-e5acc",
    storageBucket: "my-blood-bank-e5acc.appspot.com",
    messagingSenderId: "828812996299",
    appId: "1:828812996299:web:2b542d5429c83a366e354e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase