import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "./App.css";

const Auth = (props) => {
  return (
    <>
      <button>ログイン</button>
      <button>ログアウト</button>
    </>
  );
};
export default Auth;
