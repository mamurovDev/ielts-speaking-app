import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { PartOneQuestion, QuestionItem } from "@/types";
import { RootState } from "@/store/store"; // Adjust the import according to your store configuration

type TInitialState = {
  part1: PartOneQuestion[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
};
const initialState: TInitialState = {
  part1: [],
  status: "idle",
  error: null,
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
    addPartOne: (state, action: PayloadAction<PartOneQuestion[]>) => {
      state.part1.push(...action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.part1 = action.payload || [];
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
export const selectQuestionByPartId = (
  state: RootState,
  partId: string,
  questionId: string
): any => {
  const foundPart = state.partOne.part1.find(
    (part: PartOneQuestion) => part._id === partId
  );
  const emptyArray: QuestionItem[] = [];
  const returnedItem = {
    title: foundPart?.name,
    ...foundPart?.questions.find((question) => question._id === questionId),
  };
  return returnedItem || emptyArray;
};

export const { addPartOne } = partOneSlice.actions;
export default partOneSlice.reducer;
