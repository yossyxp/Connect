import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Chat from "./Chat";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import * as serviceWorker from "./serviceWorker";

const firebaseConfig = {
  apiKey: "AIzaSyDPFbaPUXIplsgxYgwlwjsJekaFJnZYp6Q",
  authDomain: "connect-720b1.firebaseapp.com",
  databaseURL: "https://connect-720b1.firebaseio.com",
  projectId: "connect-720b1",
  storageBucket: "connect-720b1.appspot.com",
  messagingSenderId: "1074927910351",
  appId: "1:1074927910351:web:79f98b542a6cd494a5e6ba",
  measurementId: "G-18602QMV2T",
};

firebase.initializeApp(firebaseConfig);
//firebase.database();

ReactDOM.render(
  <React.StrictMode>
    <Chat />
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
