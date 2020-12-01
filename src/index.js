/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";

import firebaseConfig from "./service/firebase";
import firebase from "firebase/app";
import "firebase/auth";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
