import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "./App.css";

const State = (props) => {
  if (props.member === props.message.user) {  // iconが渡されていない場合
    return (
      <>
      {props.someone ? (
        <div>
        <p className="right_name">{props.message.user}</p>
        <div className={"chats" + " " + "right"}>{props.message.text}</div>
        </div>
      ) : (
        <div></div>
      )}
    </>
    )
  } else {
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
};
export default State;
