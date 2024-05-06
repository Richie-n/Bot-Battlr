
import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

function BotCollection({ addToArmy }) {
  // Your code here
  // fetches bots from api
    const [bots, setBots] = useState([]);
  useEffect(() => {
    fetch(" https://bot-battlr-1-k9tu.onrender.com/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {/* Collection of all bots */}
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} action={addToArmy} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
