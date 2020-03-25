import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCK1ZAnOA99k_EgBDrMMb9eK-HiJ5hf44g",
  authDomain: "balance-front-end.firebaseapp.com",
  databaseURL: "https://balance-front-end.firebaseio.com",
  projectId: "balance-front-end",
  storageBucket: "",
  messagingSenderId: "102025368827",
  appId: "1:102025368827:web:8da6e3473386c2d3"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;