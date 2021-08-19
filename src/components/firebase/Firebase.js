 import firebase from "firebase";

 var firebaseConfig = {
    apiKey: "AIzaSyBDnPNKGncbsjlMSDWVfHsnsLyNtv8Dp3M",
    authDomain: "kolay-wms.firebaseapp.com",
    projectId: "kolay-wms",
    storageBucket: "kolay-wms.appspot.com",
    messagingSenderId: "148012246114",
    appId: "1:148012246114:web:a107143c20b14777f59d3b"
  };


 const fire = firebase.initializeApp(firebaseConfig);

 export default fire;