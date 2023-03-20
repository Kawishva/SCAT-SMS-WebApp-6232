import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9CSNv5UCholKwO5uQwq_JeJYajUXcL6k",
  authDomain: "kawishva-6232-vue-web.firebaseapp.com",
  projectId: "kawishva-6232-vue-web",
  storageBucket: "kawishva-6232-vue-web.appspot.com",
  messagingSenderId: "804611830368",
  appId: "1:804611830368:web:af31f27f8eb8317ec34905",
  measurementId: "G-01WGDHBPFR"
};


const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app);


export { auth,db }