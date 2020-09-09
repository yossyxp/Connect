import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "./App.css";

const Form = (props) => {
  return (
    <>
      <textarea
        id={"chat"}
        name="text"
        placeholder="comment"
        onChange={props.changeText}
      />
      <input type="submit" onClick={() => props.submit()} />
    </>
  );
};
export default Form;
