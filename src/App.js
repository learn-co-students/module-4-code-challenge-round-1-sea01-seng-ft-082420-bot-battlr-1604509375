import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

const API = "http://localhost:6000/bots"

const App = () => {
  return (
    <div className="App">
      <BotsPage/>
    </div>
  );
}

// class App extends Component {

//   render() {
//     return (
//       <div className="App">
//         <BotsPage bots={this.state.bots} />
//       </div>
//     );
//   }
// }

export default App;
