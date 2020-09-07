import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "./App.css";

const Form = (props) => {
  return (
    <>
      <textarea id={"chat"} name="text" placeholder="comment" />
      <input type="submit" id={"submit"} onClick={props.submit} />
    </>
  );
};
export default Form;
