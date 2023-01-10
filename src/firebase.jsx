
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

import firebase from "firebase";

const firebaseApp = firebase.initializeAp({

  apiKey: "AIzaSyAv5d3NoaGCGuxS-dxf3WvRj3JjJlbSSQ8",
  authDomain: "limitlessattention.firebaseapp.com",
  projectId: "limitlessattention",
  storageBucket: "limitlessattention.appspot.com",
  messagingSenderId: "824979377529",
  appId: "1:824979377529:web:db7280784b20591f6f73a8",
  measurementId: "G-BVMH9DYVWF",

});

let db = firebaseApp.firestore();

export { db };
