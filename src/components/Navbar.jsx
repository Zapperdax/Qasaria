import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { fetchRPSScores, rpsScores } from "../features/leaderboard/rpsSlice";
import {
  fetchTenzieScore,
  tenzieScores,
} from "../features/leaderboard/tenzieSlice";
import {
  fetchSimonScore,
  simonScores,
} from "../features/leaderboard/simonSlice";
import { logout } from "../features/user/userSlice";
import LeaderBoardModal from "./Modal";
import toast from "react-hot-toast";

export default function MyNavbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const RPSScores = useSelector(rpsScores);
  const TENZIEScores = useSelector(tenzieScores);
  const SIMONScores = useSelector(simonScores);
  const handleClick = () => {
    toast("Successful Logout", {
      icon: "✅",
      position: "bottom-right",
      style: {
        borderRadius: "10px",
        background: "#031B34",
        color: "#fff",
      },
    });
    localStorage.removeItem("userToken");
    dispatch(logout());
  };
  const handleSignUp = () => {
    navigate("/signUp");
  };
  const handleLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    dispatch(fetchRPSScores());
    dispatch(fetchTenzieScore());
    dispatch(fetchSimonScore());
  }, [dispatch]);

  return (
    <Navbar bg="light" expand="lg" className="navbar fixed-top">
      <Container className="navContainer">
        <Navbar.Brand>
          <Link className="logo" to="/">
            Mini Games Junction
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbarToggle"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/chatlandingpage">
              Chat
            </Link>
            <LeaderBoardModal
              RPSScores={RPSScores}
              TENZIEScores={TENZIEScores}
              SIMONScores={SIMONScores}
            />
          </Nav>
          {user ? (
            <Link className="link" to="/" onClick={handleClick}>
              Logout
            </Link>
          ) : (
            <>
              <Button
                style={{ marginRight: "1rem" }}
                variant="outline-danger"
                onClick={handleSignUp}
              >
                Sign Up
              </Button>
              <Button variant="success" onClick={handleLogin}>
                Login
              </Button>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
