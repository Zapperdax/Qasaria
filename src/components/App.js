import React from "react";
import MyNavbar from "./Navbar";
import MyCarousel from "./Carousel";
import Card from "./Cards";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";

export default function App() {
  return (
    <div className="webpage">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MyNavbar />
              <MyCarousel />
              <Card />
            </>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}
