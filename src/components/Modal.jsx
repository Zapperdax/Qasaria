import React, { useState } from "react";
import { Stack, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const LeaderBoardModal = ({ RPSScores, TENZIEScores, SIMONScores }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Link className="link" onClick={handleShow}>
        Leader Board
      </Link>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Top Players</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Rock Paper Scissors</h3>
          <Stack
            direction="horizontal"
            style={{ justifyContent: "space-between" }}
          >
            <div style={{ display: "flex" }}>
              1.{" "}
              {RPSScores.length >= 1 ? (
                <div>
                  {RPSScores[0].name} - {RPSScores[0].highScore}
                </div>
              ) : (
                0
              )}
            </div>
            <div style={{ display: "flex" }}>
              2.
              {RPSScores.length >= 2 ? (
                <div>
                  {RPSScores[1].name} - {RPSScores[1].highScore}
                </div>
              ) : (
                0
              )}
            </div>
            <div style={{ display: "flex" }}>
              3.{" "}
              {RPSScores.length >= 3 ? (
                <div>
                  {RPSScores[2].name} - {RPSScores[2].highScore}
                </div>
              ) : (
                0
              )}
            </div>
          </Stack>
          <h3>Tenzies</h3>
          <Stack
            direction="horizontal"
            style={{ justifyContent: "space-between" }}
          >
            <div style={{ display: "flex" }}>
              1.{" "}
              {TENZIEScores.length >= 1 ? (
                <div>
                  {TENZIEScores[0].name} - {TENZIEScores[0].highScore}
                </div>
              ) : (
                0
              )}
            </div>
            <div style={{ display: "flex" }}>
              2.{" "}
              {TENZIEScores.length >= 2 ? (
                <div>
                  {TENZIEScores[1].name} - {TENZIEScores[1].highScore}
                </div>
              ) : (
                0
              )}
            </div>
            <div style={{ display: "flex" }}>
              3.{" "}
              {TENZIEScores.length >= 3 ? (
                <div>
                  {TENZIEScores[2].name} - {TENZIEScores[2].highScore}
                </div>
              ) : (
                0
              )}
            </div>
          </Stack>
          <h3>LOQ</h3>
          <Stack
            direction="horizontal"
            style={{ justifyContent: "space-between" }}
          >
            <p>1.</p>
            <p>2.</p>
            <p>3.</p>
          </Stack>
          <h3>Simon</h3>
          <Stack
            direction="horizontal"
            style={{ justifyContent: "space-between" }}
          >
            <div style={{ display: "flex" }}>
              1.{" "}
              {SIMONScores.length >= 1 ? (
                <div>
                  {SIMONScores[0].name} - {SIMONScores[0].highScore}
                </div>
              ) : (
                0
              )}
            </div>
            <div style={{ display: "flex" }}>
              2.{" "}
              {SIMONScores.length >= 2 ? (
                <div>
                  {SIMONScores[1].name} - {SIMONScores[1].highScore}
                </div>
              ) : (
                0
              )}
            </div>
            <div style={{ display: "flex" }}>
              3.{" "}
              {SIMONScores.length >= 3 ? (
                <div>
                  {SIMONScores[2].name} - {SIMONScores[2].highScore}
                </div>
              ) : (
                0
              )}
            </div>
          </Stack>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default LeaderBoardModal;
