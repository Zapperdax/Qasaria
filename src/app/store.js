import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import rpsReducer from "../features/leaderboard/rpsSlice";
import tenzieReducer from "../features/leaderboard/tenzieSlice";
import simonReducer from "../features/leaderboard/simonSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    rpsScore: rpsReducer,
    tenzieScore: tenzieReducer,
    simonScore: simonReducer,
  },
});
