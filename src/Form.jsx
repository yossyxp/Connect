import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "./App.css";

const Form = (props) => {
  return (
    <>
      {props.someone ? (
        <textarea
          id={"chat"}
          name="text"
          placeholder="メッセージを入力"
          onChange={props.changeText}
        />
      ) : (
        <div></div>
      )}
      {props.someone ? (
        <input
          className="submit"
          type="submit"
          onClick={() => props.submit()}
        />
      ) : (
        <div></div>
      )}
    </>
  );
};
export default Form;
