import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "./App.css";
import Sample from "./sample.png";

const Init = (props) => {
  return (
    <>
      {props.someone ? (
        <div></div>
      ) : (
        <div className="first">
          <h2>完全匿名で話をしよう！</h2>
          <img className="image" src={Sample} />
          <div className="init">
            <p>何も気にせず話がしたい...</p>
            <p>色々な人とお話してみたい...</p>
            <p>
              Connectでは，完全に匿名で様々な人と繋がり，メッセージを交わせます．
            </p>
          </div>
          <h3>さあログインして始めよう！</h3>
          <p>↓↓↓↓↓↓↓↓↓↓↓↓↓</p>
        </div>
      )}
    </>
  );
};
export default Init;
