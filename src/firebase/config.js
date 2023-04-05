// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBl5mJEYufy0doYMaRMskcnzXfHuX0SO1k',
  authDomain: 'e-health-45bec.firebaseapp.com',
  projectId: 'e-health-45bec',
  storageBucket: 'e-health-45bec.appspot.com',
  messagingSenderId: '811514563859',
  appId: '1:811514563859:web:1566d5be33af0324809ee6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
