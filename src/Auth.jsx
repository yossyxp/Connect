import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "./App.css";

const Auth = (props) => {
  return (
    <>
      {props.someone ? (
        <button className="login" onClick={() => props.logout()}>
          ログアウト
        </button>
      ) : (
        <button className="logout" onClick={() => props.login()}>
          ログイン
        </button>
      )}
    </>
  );
};
export default Auth;
