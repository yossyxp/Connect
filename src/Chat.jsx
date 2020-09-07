import React from "react";
import Auth from "./Auth";
import Form from "./Form";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "./App.css";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
    };
  }

  render() {
    return (
      <>
        <header>
          <h1>Connect</h1>
        </header>
        <Auth />
        <Form />
        <footer>
          <p>(c) serenade.com</p>
        </footer>
      </>
    );
  }
}

export default Chat;
