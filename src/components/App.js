import React, { useEffect } from "react";
import MyNavbar from "./Navbar";
import MyCarousel from "./Carousel";
import Cards from "./Cards";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Chat from "./Chat";
import ChatbotLandingPage from "./ChatLanding";
import { api } from "../utils/axois";

export default function App() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  useEffect(() => {
    api
      .get("/user/me", {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("userToken")
          )}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
        }
      });
  }, []);
  console.log(firstName, lastName);
  return (
    <div className="webpage">
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <MyNavbar />
              <MyCarousel />
              <Cards />
            </>
          }
        ></Route>

        <Route path="/" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route
          path="/chat"
          element={
            <>
              <MyNavbar />
              <Chat firstName={firstName} lastName={lastName} />
            </>
          }
        ></Route>
        <Route
          path="/chatlandingpage"
          element={
            <>
              <MyNavbar />
              <ChatbotLandingPage />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

// <Route path="/active" element={< Cards />}> </Route>
