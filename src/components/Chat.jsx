import React, { useEffect } from "react";
import InputEmoji from "react-input-emoji";
import io from "socket.io-client";
import { useSelector } from "react-redux";

const socket = io.connect("http://localhost:2533");

const Chat = () => {
  const [text, setText] = React.useState("");
  const [chat, setChat] = React.useState([]);
  const [messageClass, setMessageClass] = React.useState("userMessage");
  const user = useSelector((state) => state.users.user);
  const handleText = (text) => {
    socket.emit("sendMessage", { sendMessage: text });
    console.log(text);
    setMessageClass("userMessage");
    setChat((preValue) => [...preValue, text]);
  };

  useEffect(() => {
    socket.on("receiveMessage", ({ sendMessage }) => {
      setMessageClass("receiverMessage");
      setChat((preValue) => [...preValue, sendMessage]);
    });
    // eslint-disable-next-line
  }, [socket]);
  return (
    <div className="chatbotPage">
      <img
        className="floating chatbotPNG"
        src="/images/chatchatfinal.png"
        alt="chatbot"
      />
      <div className="chatInfoContainer">
        <div className="chatbotInformation">Welcome {user.name}</div>
        <div className="chatMain">
          {chat.map((message, i) => {
            return (
              <div key={i} className={messageClass}>
                <p>{message}</p>
              </div>
            );
          })}
        </div>
        <div className="chatMessageSend">
          <InputEmoji
            value={text}
            onChange={setText}
            cleanOnEnter
            onEnter={handleText}
            placeholder="Chat"
            borderColor="#1A1A1A"
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
