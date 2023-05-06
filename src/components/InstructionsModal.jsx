import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function InstructionsModal({ open, handleClose, modalNumber }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalNumber === 1
              ? "RPS Instructions"
              : modalNumber === 2
              ? "Tenzies Instructions"
              : modalNumber === 4
              ? "Simon Instructions"
              : null}
          </Typography>
          {modalNumber === 1 ? (
            <img
              style={{ width: "100%" }}
              src="/images/rpsInstructions.png"
              alt="RPS"
            />
          ) : modalNumber === 2 ? (
            <Typography>
              Roll The Dice, until all the dice are same, the best time wins
            </Typography>
          ) : modalNumber === 4 ? (
            <Stack spacing={2}>
              <Typography>
                1) Slide the ON/OFF switch to ON, the Game Selector switch to
                "1" and the Skill Level switch to 1,2, 3 or 4.
              </Typography>
              <Typography>
                2) Press the START button. Simon will give the first signal.
                Repeat the signal by pressing the same color lens.
              </Typography>
              <Typography>
                3) Simon will duplicate the first signal and add one. Repeat
                these two signals by pressing the same color lenses, in order.
              </Typography>
              <Typography>
                4) Simon will duplicate these first two signals and add one.
              </Typography>
              <Typography>
                5) Continue playing as long as you can repeat each sequence of
                sig- nals correctly. After the 5th, 9th and 13th signals in a
                sequence, Simon automatically speeds up.
              </Typography>
              <Typography>
                6) If you fail to repeat a sequence exactly, or if you take more
                than 5 seconds to repeat a signal, Simon responds with a "RAZZ"
                sound. This means you've lost, and the sequence of signals ends.
              </Typography>
            </Stack>
          ) : null}
        </Box>
      </Modal>
    </div>
  );
}
