import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { PartTwoQuestion } from "@/types";
import { RootState } from "../store";

type TInitialState = {
  part2: PartTwoQuestion[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
};

const initialState: TInitialState = {
  part2: [],
  status: "idle",
  error: null,
};

export const fetchPartTwoQuestions = createAsyncThunk(
  "partTwo/fetchPartTwoQuestions",
  async () => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseURL}/api/speaking/part2`);
    const data = await response.json();
    return data;
  }
);

export const partTwoSlice = createSlice({
  name: "partTwo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPartTwoQuestions.fulfilled, (state, action) => {
        state.part2 = action.payload || [];
        state.status = "succeeded";
      })
      .addCase(fetchPartTwoQuestions.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPartTwoQuestions.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});

export const selectQuestionByPartId = (
  state: RootState,
  questionID: string
) => {
  return state.partTwo.part2.find((question) => question._id === questionID);
};

export default partTwoSlice.reducer;
