import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "./App.css";

const Form = (props) => {
  return (
    <>
      <textarea placeholder="メッセージを入力" />
      <input />
    </>
  );
};
export default Form;
