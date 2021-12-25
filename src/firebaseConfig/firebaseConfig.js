import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyApuj8xDsW4deVQkb4ezlaA3Qvi0TjAxFo',
  authDomain: 'c-social-3d454.firebaseapp.com',
  projectId: 'c-social-3d454',
  storageBucket: 'c-social-3d454.appspot.com',
  messagingSenderId: '705405050095',
  appId: '1:705405050095:web:7ee6172e0274bcdfec8f1a',
  measurementId: 'G-MMHM3902RN',
};

let app;

app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();
const firestore = firebase.firestore();
const storage = app.storage();
export {auth, firestore, storage};
