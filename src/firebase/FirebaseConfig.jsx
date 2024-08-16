import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_DWM2DDjITbdDn6eWi_pJI7GntmZwicE",
  authDomain: "ecommerce-babea.firebaseapp.com",
  projectId: "ecommerce-babea",
  storageBucket: "ecommerce-babea.appspot.com",
  messagingSenderId: "739306310405",
  appId: "1:739306310405:web:c285a23cdd6da1180dc56c"
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}