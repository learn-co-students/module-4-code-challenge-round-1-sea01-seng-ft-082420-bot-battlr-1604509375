import React, { Component } from "react";
import YourBotArmy from "../containers/YourBotArmy";
import BotCollection from "../containers/BotCollection";
import BotSpecs from "../components/BotSpecs.js";

const GET = "http://localhost:6001/bots"
// const POST = "http://localhost:6001/bots"
// const DELETE = `http://localhost:6001/bots/${bot.id}`

class BotsPage extends Component {
  //start here with your code for step one

  constructor() {
    super()
    this.state = {
      bots: [],
      botArmy: [],
      botSpecs: false,
      selectedBot: null
    }
  }

  componentDidMount() {
    fetch(GET).then(res => res.json()).then(
      bots => 
      this.setState({bots: bots}))
  }
  
  handleSelectFromCollection = (bot) => {
        this.setState({selectedBot: bot, botSpecs: true})
      }

  handleEnlist = (bot) => {
    if (!this.state.botArmy.includes(bot)) {
      this.setState({botArmy:[...this.state.botArmy, bot], botSpecs: false})
    }
  }

  handleGoBack = () => {
    this.setState({botSpecs: false})
  }

  handleSelectFromArmy = (bot) => {
    // if (this.state.botArmy.includes(bot)) {
      // this.setState({botArmy:[this.state.botArmy.filter(this.filterBots(bot))]})
      this.setState({botArmy:this.state.botArmy.filter(b => b !== bot)})
    // }
  }

  handleDeleteForever = (e, bot) => {
    e.stopPropagation()
    this.setState({bots:this.state.bots.filter(b => b !== bot)})
    this.setState({botArmy:this.state.botArmy.filter(b => b !== bot)})

    fetch(`http://localhost:6001/bots/${bot.id}`, {method: "DELETE"})
    .then(res => res.json())
  }

  //write filter function that looks for bot by id and returns that to filter function
  // filterBots = (bot) => {
  //   if (x.id != bot.id){
  //     return x;
  //   }
  // }

  showBotsOrSpecs = () => {
    if (!this.state.botSpecs)
      return <BotCollection handleSelectFromCollection={this.handleSelectFromCollection} handleDeleteForever={this.handleDeleteForever} bots={this.state.bots}></BotCollection>
    else
      return <BotSpecs bot={this.state.selectedBot} handleEnlist={this.handleEnlist} handleGoBack={this.handleGoBack}></BotSpecs>
  }

  render() {
    return (
    <div>
      <YourBotArmy handleSelectFromArmy={this.handleSelectFromArmy} handleDeleteForever={this.handleDeleteForever} botArmy={this.state.botArmy}></YourBotArmy>
      {this.showBotsOrSpecs()}
    </div>
    );
  }
}

export default BotsPage;
