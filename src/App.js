import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

class App extends Component {

  constructor() {
    super();
    this.state = {
      foo: "notBar"
    };
  }

  componentDidMount() {
    const fooRef = firebase.database().ref().child('foo');

    fooRef.on('value', snap => {
      this.setState( {
        foo: snap.val()
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.foo}</h2>
        </div>
      </div>
    );
  }
}

export default App;
