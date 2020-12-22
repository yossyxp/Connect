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
        <p className="left_name">{props.message.user}</p>
      <div className={"chats" + " " + "left"}>{props.message.text}</div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
export default State;
