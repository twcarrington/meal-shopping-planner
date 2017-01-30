import React, {Component} from 'react';
import {internsPracticeDB} from '../../config/FirebaseConstants';

class Partners extends Component {
  constructor() {
    super();
    this.state = {
      blargh: 'twelve'
    };
  }

  componentDidMount() {
    const practiceRootRef = internsPracticeDB.ref().child('producers/');
    
    practiceRootRef.on('value', snap => {
      practiceRootRef.innerText = JSON.stringify(snap.val(), null, 3);
      this.setState( {
        producers: practiceRootRef.innerText
      })
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.producers}</h1>
      </div>
    );
  }
}

export default Partners;
