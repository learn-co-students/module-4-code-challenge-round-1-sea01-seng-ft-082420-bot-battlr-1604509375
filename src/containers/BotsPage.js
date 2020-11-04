import React, { Component } from "react";
import YourBotArmy from "../containers/YourBotArmy";
import BotCollection from "../containers/BotCollection";



const GET = "http://localhost:6001/bots"
const POST = "http://localhost:6000/bots"
const DELETE = "http://localhost:6000/bots/${id}"

class BotsPage extends Component {
  //start here with your code for step one

  constructor() {
    super()
    this.state = {
      bots: [],
      isSelected: [],
      botArmy: []
    }
  }

  componentDidMount() {
    fetch(GET).then(res => res.json()).then(
      bots => 
      this.setState({bots: bots}))
  }
  
  handleSelectFromCollection = (bot) => {
    if (!this.state.isSelected.includes(bot)) {
      this.setState({isSelected:[...this.state.isSelected, bot]})
    }
  }

  handleSelectFromArmy = (bot) => {
    if (!this.state.isSelected.includes(bot)) {
      this.setState({isSelected:[...this.state.isSelected, bot]})
    }
  }

  render() {
    return (
    <div>
      <BotCollection bots={this.state.bots} handleSelectFromCollection={}/>
      <YourBotArmy handleSelectFromArmy></YourBotArmy>
    </div>
    );
  }
}

export default BotsPage;


  
//   render() {
//     return (
//       <div className="app">
//         <BotCollection bots={this.state.bots}/>
//         <YourBotArmy></YourBotArmy>
//       </div>
//     );
//   }
// }