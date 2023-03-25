import React, { useEffect } from "react";
import InputEmoji from "react-input-emoji";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";
import { useSelector } from "react-redux";

const socket = io.connect("http://localhost:2533");

const Chat = () => {
  const { state } = useLocation();
  const [text, setText] = React.useState("");
  const [chat, setChat] = React.useState([]);
  const user = useSelector((state) => state.users.user);

  const handleText = (text) => {
    const messageData = {
      room: state,
      sendMessage: text,
      username: user.name,
    };
    socket.emit("sendMessage", messageData);
  };

  useEffect(() => {
    socket.on("receiveMessage", (messageData) => {
      setChat((prevValue) => [
        ...prevValue,
        {
          username: messageData.username,
          message: messageData.sendMessage,
        },
      ]);
    });
  }, []);

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
              <div key={i} className="userMessage">
                <p>
                  <strong>{message.username}:</strong> {message.message}
                </p>
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
