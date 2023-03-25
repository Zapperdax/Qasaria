import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/axois";

const initialState = [];

export const fetchSimonScore = createAsyncThunk(
  "simon/fetchScore",
  async () => {
    try {
      const response = await api.get("/simon/allScores");
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

const simonSlice = createSlice({
  name: "simonScores",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSimonScore.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const simonScores = (state) => state.simonScore;
export default simonSlice.reducer;
