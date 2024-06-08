import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { TelegramChannel } from "@/types/TelegramChannels";

const initialState = {
  telegramChannels: [] as TelegramChannel[],
  status: "idle" as "idle" | "loading" | "succeeded" | "failed",
  error: null as string | null | undefined,
};

export const fetchTelegramChannels = createAsyncThunk(
  "telegramChannels/fetchTelegramChannels",
  async () => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseURL}/api/tg`);
    const data = response.json();
    return data;
  }
);

export const telegramChannelSlice = createSlice({
  name: "telegramChannels",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTelegramChannels.fulfilled, (state, action) => {
        (state.telegramChannels = action.payload.telegramChannels || []),
          (state.status = "succeeded");
      })
      .addCase(fetchTelegramChannels.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.log(action.error.message);
      })
      .addCase(fetchTelegramChannels.pending, (state, action) => {
        state.status = "loading";
      });
  },
});

export default telegramChannelSlice.reducer;
