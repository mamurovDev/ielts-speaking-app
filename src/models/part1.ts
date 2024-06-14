import mongoose from "mongoose";
const questionSchema = new mongoose.Schema({
  _id: String,
  question: String,
  answer: String,
  ideas: [String],
  vocabulary: [String],
});

const part1Schema = new mongoose.Schema({
  _id: String,
  name: String,
  author: String,
  lastUpdatedTime: String,
  questions: [questionSchema],
});

const Part1 = mongoose.models.Part1 || mongoose.model("Part1", part1Schema);

export default Part1;
