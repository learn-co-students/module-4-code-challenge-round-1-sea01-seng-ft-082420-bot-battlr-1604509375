import React, { Component } from "react";
import BotCard from "../components/BotCard.js";
// import BotSpecs from "../components/BotSpecs.js"

class YourBotArmy extends Component {

  render() {

    var displayBots = this.props.botArmy.map(bot => {return <BotCard bot={bot} key={bot.id} handleSelect={this.props.handleSelectFromArmy}handleDeleteForever={this.props.handleDeleteForever}></BotCard>})

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {displayBots}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
