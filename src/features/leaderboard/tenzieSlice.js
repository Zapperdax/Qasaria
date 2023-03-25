import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/axois";

const initialState = [];

export const fetchTenzieScore = createAsyncThunk(
  "tenzie/fetchScore",
  async () => {
    try {
      const response = await api.get("/tenzie/allScores");
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

const tenzieSlice = createSlice({
  name: "tenzieScore",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTenzieScore.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const tenzieScores = (state) => state.tenzieScore;
export default tenzieSlice.reducer;
