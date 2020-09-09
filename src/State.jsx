import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "./App.css";

const State = (props) => {
  return (
    <>
      <div>
        <p>
          ・{props.message.user}：{props.message.text}
        </p>
      </div>
    </>
  );
};
export default State;
