importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9aHZYEKq7keN_WhpsRI1Cxq_9KCUN7RQ",
  authDomain: "nest-451e2.firebaseapp.com",
  projectId: "nest-451e2",
  storageBucket: "nest-451e2.appspot.com",
  messagingSenderId: "734655680800",
  appId: "1:734655680800:web:a208114c68f6f9d2dd0745",
  measurementId: "G-R8ZZQ60GQ8"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// todo Set up background message handler