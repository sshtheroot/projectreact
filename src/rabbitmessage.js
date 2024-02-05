import React, { useEffect, useState } from "react";
import Stomp from "stompjs"
export default function Rabbitmessage() {
  const [sinput, setsInput] = useState("");
  var ws = new WebSocket("amqps://nldxksru:njfegab3WiNhOqTIXh7mxUtNY4RUsOqO@puffin.rmq2.cloudamqp.com/nldxksru");
  var client = Stomp.over(ws);

  const [msg, setmsg] = useState([]);
  var on_connect = function () {
    console.log("connected");
    client.subscribe("/topic/sender", (messages) => {
      console.log(messages);
      msg.push(messages.body);
      console.log(msg);
      setmsg([...msg]);
    });
  };
  const handleClick = () => {
    console.log(client.subscriptions);
    client.send("/topic/sender",{redelivered: false,},document.getElementById("mess").value);
  };

  var on_error = function () {
    console.log("error");
  };
  useEffect(() => {
    client.connect("nldxksru", "njfegab3WiNhOqTIXh7mxUtNY4RUsOqO", on_connect, on_error, "/");
  });

  return (
    <div>
      <div>Messenger</div>
      <input id="mess" />
      <button onClick={() => {handleClick();}}>send</button>
      {msg.map((val, key) => {
        return <div key={key}>{val}</div>;
      })}
    </div>
  );
}

 