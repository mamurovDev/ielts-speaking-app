import mongoose, { Schema } from "mongoose";

const part1Schema = new Schema(
  {
    vocabulary: [String],
    questions: [String],
    answers: [String],
    author: String,
  },
  {
    timestamps: true,
  }
);

const Part1 = mongoose.models?.Part1 || mongoose.model("Part1", part1Schema);
export default Part1;

