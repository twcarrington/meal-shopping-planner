import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

var foodStuff = [];

class App extends Component {

  constructor() {
    super();
    this.state = {
      food: null
    };
  }

  componentDidMount() {
    const foodRef = firebase.database().ref('/food/');

    foodRef.on('value', snap => {

      snap.forEach(function(childOfSnap) {
        foodStuff.push(childOfSnap.val());

        console.log(foodStuff);
      });

    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <h2>{this.state.food}</h2>
          <h2>{foodStuff}</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}



// class App extends Component {
//
//   constructor() {
//     super();
//     this.state = {
//       food: null
//     };
//   }
//
//   componentDidMount() {
//     const foodRef = firebase.database().ref('/food/');
//     foodRef.on('value', snap => {
//       let foodRefString = JSON.stringify(snap.val(), null, 3);
//       this.setState( {
//         food: foodRefString
//       })
//     });
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//         </div>
//         <div>
//           <h2>{this.state.food}</h2>
//           <img src={logo} className="App-logo" alt="logo" />
//         </div>
//       </div>
//     );
//   }
// }



export default App;
