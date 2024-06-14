export type PartOneQuestion = {
  _id: string;
  name: string;
  author: string;
  lastUpdatedTime: string;
  questions: QuestionItem[];
  order: number;
};

export type QuestionItem = {
  _id: string;
  order: number;
  question: string;
  answer: string;
  ideas: string[];
  vocabulary: string[];
};
