import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBSDPPNKaNasEHP08mYs1XuDujkGFdg0jc",
    authDomain: "whatsapp-clone-71da6.firebaseapp.com",
    projectId: "whatsapp-clone-71da6",
    storageBucket: "whatsapp-clone-71da6.appspot.com",
    messagingSenderId: "174523329074",
    appId: "1:174523329074:web:c571dc28e25445b475ea2b",
    measurementId: "G-EEST2KTPDQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth, provider};
  export default db;