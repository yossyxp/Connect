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
      someone: null,
      chat: "",
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        someone: user,
      });
    });
  }

  // componentDidUpdate() {
  // 新しいメッセージが来たら，スクロールとかの機能
  // }

  // componentWillUnmount() {
  //   ?
  // }

  login = () => {
    firebase
      .auth()
      .signInAnonymously()
      .then((user) => {
        alert(user.user.uid.substr(0, 10) + "さんでログインしました");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        document.location.reload();
        alert("ログアウトしました");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  render() {
    return (
      <>
        <header>
          <h1>Connect</h1>
        </header>
        <Auth
          someone={this.state.someone}
          login={() => this.login()}
          logout={() => this.logout()}
        />
        <Form someone={this.state.someone} submit={() => this.submit()} />
        <footer>
          <p>(c) serenade.com</p>
        </footer>
      </>
    );
  }
}

export default Chat;
