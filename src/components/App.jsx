import React from "react";
import MyNavbar from "./Navbar";
import MyCarousel from "./Carousel";
import Cards from "./Cards";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Chat from "./Chat";
import ChatbotLandingPage from "./ChatLanding";
import ProtectedRoutes from "./ProtectedRoutes";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

export default function App() {
  // const { user } = useAuthContext();
  const user = useSelector((state) => state.users.user);
  return (
    <div className="webpage">
      {user ? (
        <Toaster position="bottom-right" reverseOrder="false" />
      ) : (
        <Toaster position="top-center" reverseOrder="false" />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MyNavbar />
              <MyCarousel />
              <Cards />
            </>
          }
        ></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/chat"
            element={
              <>
                <MyNavbar />
                <Chat />
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
        </Route>
      </Routes>
    </div>
  );
}

// <Route path="/active" element={< Cards />}> </Route>
