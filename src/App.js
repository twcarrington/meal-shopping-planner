import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

class App extends Component {

  constructor() {
    super();
    this.state = {
      foo: "notBar",
      inner: "inner"
    };
  }

  componentDidMount() {
    const fooRef = firebase.database().ref('/foo/');

    fooRef.on('value', snap => {
      fooRef.innerText = JSON.stringify(snap.val(), null, 3);
      this.setState( {
        foo: snap.val(),
        inner: fooRef.innerText
      })
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <div>
          <h2>{this.state.inner}</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default App;
