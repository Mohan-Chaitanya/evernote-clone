import firebase from "firebase"
import "firebase/firestore"
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyD4I0m4PuVI-NnCfnwLolb9Sa13GyMGXPw",
    authDomain: "evernote-clone-51ff0.firebaseapp.com",
    projectId: "evernote-clone-51ff0",
    storageBucket: "evernote-clone-51ff0.appspot.com",
    messagingSenderId: "282621662605",
    appId: "1:282621662605:web:d136ef8d0dd6839ad759c4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebaseConfig;