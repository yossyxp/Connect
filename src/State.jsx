import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "./App.css";

const State = (props) => {
  return (
    <>
      {props.someone ? (
        <div>
          <p className="chats">
            {props.message.user}：{props.message.text}
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
export default State;
