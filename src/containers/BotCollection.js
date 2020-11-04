import React, { Component } from "react";
import BotCard from "../components/BotCard.js";
import BotSpecs from "../components/BotSpecs.js"

class BotCollection extends Component {
  constructor() {
    super()
  }

  render() {
    const bots = this.props.bots;



  var displayBots = bots.map(bot => {return <BotCard bot={bot}></BotCard>})
    
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