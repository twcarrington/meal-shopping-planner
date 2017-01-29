import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {data} from './config.js';




class App extends Component {

  constructor() {
    super();
    this.state = {
      foo: "notBar"
    };
  }

  componentDidMount() {
    const fooRef = data.ref().child();

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
        <div>
          To get started, edit <code>src/App.js</code> and save to reload.
        </div>
      </div>
    );
  }
}

export default App;

///////////
//
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       blargh: 'twelve'
//     };
//   }
//
//   componentDidMount() {
//     const practiceRootRef = internsPracticeDB.ref().child('producers/');
//     practiceRootRef.on('value', snap => {
//       practiceRootRef.innerText = JSON.stringify(snap.val(), null, 3);
//       this.setState( {
//         producers: practiceRootRef.innerText
//       })
//     });
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>{this.state.producers}</h1>
//       </div>
//     );
//   }
// }
//
// export default App;
//
