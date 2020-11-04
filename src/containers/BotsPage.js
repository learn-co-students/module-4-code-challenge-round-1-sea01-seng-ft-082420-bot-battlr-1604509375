import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  //start here with your code for step one
  state ={
    bots: [],
    myArmy: [],
    currentBot: {}, 
    activeBot: null
  }

  componentDidMount() {
    fetch("http://localhost:6001/bots")
    .then(res => res.json())
    .then(res => this.setBots(res))
  }

  setBots = data => {
    this.setState({
      bots: data
    })
  }

  displayBot = (bot) => {
    this.setState({
      activeBot: bot
    })
  }

  activeNull =() => {
    this.setState({
      activeBot: null
    })
  }

  addToArmy = bot => {
    if(!this.state.myArmy.includes(bot)){
    this.setState((prevState) => ({
      myArmy: [...prevState.myArmy, bot]
    }))
  }
  }

  removeBot = (bot) => {
    this.setState((prevState) => ({
      myArmy: prevState.myArmy.filter((char) => char !== bot)
    }))
  }

  render() {
    const { bots, activeBot, myArmy } = this.state
    return <div>
      <YourBotArmy bots={this.state.myArmy} handleClick={this.removeBot} />
      <BotCollection bots={this.state.bots} addToArmy={this.addToArmy} />
      </div>;
  }
}

export default BotsPage;
