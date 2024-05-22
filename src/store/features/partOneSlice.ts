import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { PartOneQuestions } from "@/types";

const initialState = {
  partOne: [] as PartOneQuestions[],
  status: "idle",
  error: null as string | null | undefined,
};

export const fetchQuestions = createAsyncThunk(
  "partOne/fetchQuestions",
  async () => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseURL}/api/speaking`);
    const data = await response.json();
    return data;
  }
);

export const partOneSlice = createSlice({
  name: "partOne",
  initialState,
  reducers: {
    addPartOne: (state, action: PayloadAction<PartOneQuestions[]>) => {
      state.partOne.push(...action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.partOne = action.payload.part1;
    });
    builder.addCase(fetchQuestions.rejected, (state, action) => {
      console.log(action.error.message);
      state.error = action.error.message;
      state.status = "failed";
    });
    builder.addCase(fetchQuestions.pending, (state, action) => {
      state.status = "loading";
    });
  },
});

export const { addPartOne } = partOneSlice.actions;
export default partOneSlice.reducer;
