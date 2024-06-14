import mongoose from "mongoose";

const QuestionPointSchema = new mongoose.Schema({
  _id: String,
  question: String,
  answers: [String],
});

const QuestionSchema = new mongoose.Schema({
  _id: String,
  name: String,
  question: String,
  order: Number,
  vocabulary: [String],
  answers: [String],
  points: [QuestionPointSchema],
});

const Part2 = mongoose.models.Part2 || mongoose.model("Part2", QuestionSchema);

export default Part2;
