import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ChatbotLandingPage = () => {
  const [room, setRoom] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/chat", { state: room });
  };
  return (
    <div className="chatbotPage">
      <div className="infoContainer">
        {/* style={{ border: "1px solid red" }} */}
        <div className="chatLeftSide">
          <h1>Create A Chat Room</h1>
          <div style={{ padding: "1rem" }} className="chatButtonContainer">
            <TextField
              sx={{ mr: 3, input: { color: "white" } }}
              label="Room ID"
              variant="standard"
              color="success"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            ></TextField>

            <Button
              // style={{ backgroundColor: "red" }}
              onClick={handleClick}
              variant="contained"
            >
              Join
            </Button>
          </div>

          <p
            style={{
              padding: "0.5rem",
              marginBottom: "0.5rem",
              color: "white",
            }}
          >
            Your Personal Chat Room
          </p>
        </div>
        <div className="phoneOnlyDoodle">
          <img
            className="chatbotdoodle"
            src="/images/chatchatfinal.png"
            alt="doodle"
          />
        </div>
        <div className="chatRightSide">
          <img
            className="webChatbotDoodle"
            src="/images/chatchatfinal.png"
            alt="doodle"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatbotLandingPage;
