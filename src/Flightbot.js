import React from "react";
import iframe from "react-iframe";
import "./Flightbot.css";
import { useStateValue } from "./StateProvider";
import bot from "./bot.png";

function Flightbot() {
  const { user } = useStateValue();
  return (
    <div className="flightbot__container">
      <div className="flightbot__intro">
        <h1>Hello {!user ? "Guest" : user.email}</h1>
        <br />
        <h1>Welcome to the Amazon Flight</h1>
        <br />
        <h2>Let our Flight Agent book your desired flight for you!</h2>
        <img src={bot} alt="" />
      </div>
      <div className="flightbot__chatbox">
        <iframe src="https://webchat.botframework.com/embed/amazonclonebot?s=PpBbJsKcY5k.WLCzdfv1fXxXumAtOUyPdk8lqct1YUNJlz5AhDgrPNc"></iframe>
      </div>
    </div>
  );
}

export default Flightbot;
