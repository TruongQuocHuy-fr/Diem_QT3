import { initializeApp } from 'firebase/app';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyARVgNSIpLF3vzE5LWOfboSUfieanHRzhk",
  authDomain: "connectdata-ce589.firebaseapp.com",
  projectId: "connectdata-ce589",
  storageBucket: "connectdata-ce589.appspot.com",
  messagingSenderId: "1000178099654",
  appId: "1:1000178099654:web:87c52450d88b6769f6fec7"
};
  

const app = initializeApp(firebaseConfig);
export default app;