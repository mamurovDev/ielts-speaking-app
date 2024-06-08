import mongoose from "mongoose";

const telegramChannelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  img: { type: String, required: true },
  bio: { type: String, required: true },
}, { collection: 'telegramChannels' });

const TelegramChannel =
  mongoose.models.TelegramChannel ||
  mongoose.model("TelegramChannel", telegramChannelSchema);

export default TelegramChannel;
