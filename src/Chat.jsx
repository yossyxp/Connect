import React from "react";
import Auth from "./Auth";
import Form from "./Form";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import "./App.css";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someone: "",
      text: "",
    };
    this.changeText = this.changeText.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        someone: user,
      });
    });
  }

  // componentDidUpdate() {

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

  changeText(e) {
    if (e.target.name == "text") {
      this.setState({
        text: e.target.value,
      });
    }
  }

  submit = () => {
    firebase
      .firestore()
      .collection("messages")
      .add({
        chat: this.state.text,
        created: firebase.firestore.FieldValue.serverTimestamp(),
        uid: this.state.someone ? this.state.someone.uid : "nobody",
      })
      .then((doc) => {
        console.log(`${doc.id} add!`);
      })
      .catch((error) => {
        console.log("not add");
        console.log(error);
      });
    const chat = document.getElementById("chat");
    chat.value = "";
    chat.focus();
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
        <Form
          someone={this.state.someone}
          changeText={this.changeText}
          submit={() => this.submit()}
        />
        <footer>
          <p>(c) 練習中.com</p>
        </footer>
      </>
    );
  }
}

export default Chat;
