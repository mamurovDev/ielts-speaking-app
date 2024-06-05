import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { PartOneQuestions, QuestionItem } from "@/types";
import { RootState } from "@/store/store"; // Adjust the import according to your store configuration
import { createSelector } from "reselect";
const initialState = {
  part1: [] as PartOneQuestions[],
  status: "idle" as "idle" | "loading" | "succeeded" | "failed",
  error: null as string | null | undefined,
};

export const fetchQuestions = createAsyncThunk(
  "partOne/fetchQuestions",
  async () => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseURL}/api/speaking/part1`);
    const data = await response.json();
    return data;
  }
);

export const partOneSlice = createSlice({
  name: "partOne",
  initialState,
  reducers: {
    addPartOne: (state, action: PayloadAction<PartOneQuestions[]>) => {
      state.part1.push(...action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.part1 = action.payload.part1 || [];
        state.status = "succeeded";
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        console.log(action.error.message);
        state.error = action.error.message;
        state.status = "failed";
      })
      .addCase(fetchQuestions.pending, (state) => {
        state.status = "loading";
      });
  },
});

// Selector to find questions by PartOneQuestions ID
export const selectQuestionsByPartId = (
  state: RootState,
  partId: string,
  questionId: string
): any => {
  const foundPart = state.partOne.part1.find(
    (part: PartOneQuestions) => part._id === partId
  );
  const emptyArray: QuestionItem[] = [];
  const questions = foundPart?.questions || [];
  const returnedItem = {
    title: foundPart?.name,
    ...foundPart?.questions.find((question) => question._id === questionId),
  };
  return returnedItem || emptyArray;
};

export const { addPartOne } = partOneSlice.actions;
export default partOneSlice.reducer;
