export type PartTwoQuestion = {
  _id: string;
  name: string;
  question: string;
  order: number;
  points: QuestionPoint[];
  vocabulary: string[];
  answers: string[];
};

export type QuestionPoint = {
  _id: string;
  question: string;
  answers: string[];
};
