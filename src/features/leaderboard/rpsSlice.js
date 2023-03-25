import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/axois";

const initialState = [];

export const fetchRPSScores = createAsyncThunk("rps/fetchScore", async () => {
  try {
    const response = await api.get("/rps/allScores");
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const rpsSlice = createSlice({
  name: "rpsScore",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchRPSScores.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const rpsScores = (state) => state.rpsScore;
export default rpsSlice.reducer;
