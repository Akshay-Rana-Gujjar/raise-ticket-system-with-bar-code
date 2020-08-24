import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCTpFD2mrK4DTudbN6m_7iqP6uAHBgUAdo",
    authDomain: "issue-ticket-system.firebaseapp.com",
    databaseURL: "https://issue-ticket-system.firebaseio.com",
    projectId: "issue-ticket-system",
    storageBucket: "issue-ticket-system.appspot.com",
    messagingSenderId: "517587895598",
    appId: "1:517587895598:web:ec2ca471c2c93cf9e666bf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();