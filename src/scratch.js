var query = firebase.database().ref("users").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();
  });
});

////////////////////////////////////

class App extends Component {
  var foodStuff;

  constructor() {
    super();
    this.state = {
      food: null
    };
  }



  componentDidMount() {
    const foodRef = firebase.database().ref('/food/');
    foodRef.forEach(function(childSnapshot) {
      childString = JSON.stringify(childSnapshot.val());
      foodStuff = [];
      foodStuff.push(childString)
      this.setState( {
        food: childSnapshot.val()
      })
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
