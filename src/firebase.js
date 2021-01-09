import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAufn1FjE84U4wuFu5EXJTGghhTj0LM10w",
    authDomain: "discord-clone-jf.firebaseapp.com",
    databaseURL: "https://discord-clone-jf.firebaseio.com",
    projectId: "discord-clone-jf",
    storageBucket: "discord-clone-jf.appspot.com",
    messagingSenderId: "700744974155",
    appId: "1:700744974155:web:a4696b1fe1773f269272ce"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
        

  export { auth, provider};
  export default db;