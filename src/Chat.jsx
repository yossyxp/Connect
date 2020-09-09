import React from "react";
import Auth from "./Auth";
import Init from "./Init";
import State from "./State";
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
      messages: [],
    };
    this.changeText = this.changeText.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        someone: user,
      });
    });

    firebase
      .firestore()
      .collection("messages")
      .orderBy("created")
      .onSnapshot((querySnapshot) => {
        let msgs = [];
        querySnapshot.forEach((doc) => {
          const d = doc.data();
          msgs.push({
            text: d.chat,
            user: d.uid.substr(0, 10),
          });
        });
        this.setState({
          messages: msgs,
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
          <h1 className="title">Connect</h1>
          <Auth
            someone={this.state.someone}
            login={() => this.login()}
            logout={() => this.logout()}
          />
        </header>
        <main>
          <Init someone={this.state.someone} />
          {this.state.someone ? (
            <div></div>
          ) : (
            <Auth
              someone={this.state.someone}
              login={() => this.login()}
              logout={() => this.logout()}
            />
          )}
          {this.state.messages.map((m, i) => {
            return <State key={i} message={m} someone={this.state.someone} />;
          })}
          <Form
            someone={this.state.someone}
            changeText={this.changeText}
            submit={() => this.submit()}
          />
        </main>
        <footer>
          <p>(c) 練習中.com</p>
        </footer>
      </>
    );
  }
}

export default Chat;
