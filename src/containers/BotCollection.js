import React, { Component } from "react";
import BotCard from "../components/BotCard.js";


class BotCollection extends Component {
  // constructor() {
  //   super()
  // }

  render() {
    const bots = this.props.bots;

    let displayBots = bots.map(bot => <BotCard bot={bot} key={bot.id} handleSelect={this.props.handleSelectFromCollection} handleDeleteForever={this.props.handleDeleteForever}></BotCard>)
    
    return (
      <div className="ui four column grid">
        <div className="row">
          {displayBots}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;