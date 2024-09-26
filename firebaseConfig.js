// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from '@firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARVgNSIpLF3vzE5LWOfboSUfieanHRzhk",
  authDomain: "connectdata-ce589.firebaseapp.com",
  projectId: "connectdata-ce589",
  storageBucket: "connectdata-ce589.appspot.com",
  messagingSenderId: "1000178099654",
  appId: "1:1000178099654:web:87c52450d88b6769f6fec7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Các dịch vụ
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };


