import React, { useState } from "react";
import { Stack, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const LeaderBoardModal = () => {
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
            <p>1.</p>
            <p>2.</p>
            <p>3.</p>
          </Stack>
          <h3>Tenzies</h3>
          <Stack
            direction="horizontal"
            style={{ justifyContent: "space-between" }}
          >
            <p>1.</p>
            <p>2.</p>
            <p>3.</p>
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
            <p>1.</p>
            <p>2.</p>
            <p>3.</p>
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
