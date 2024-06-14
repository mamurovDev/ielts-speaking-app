import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import partOneSlice from "./features/partOneSlice";
import telegramChannelSlice from "./features/telegramChannelSlice";
import partTwoSlice from "./features/partTwoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    partOne: partOneSlice,
    partTwo: partTwoSlice,
    telegramChannels: telegramChannelSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
