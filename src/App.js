import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

class App extends Component {

  constructor() {
    super();
    this.state = {
      foo: "notBar",
      inner: "inner",
      food: null
    };
  }

  componentDidMount() {
    const foodRef = firebase.database().ref('/food/');

    foodRef.on('value', snap => {
      foodRef.innerText = JSON.stringify(snap.val(), null, 3);
      let foodRefString = JSON.stringify(snap.val(), null, 3);
      this.setState( {
        foo: snap.val(),
        inner: foodRef.innerText,
        food: foodRefString
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
          <h2>{this.state.food}</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default App;
