export interface PartOneQuestions {
  _id: string;
  name: string;
  author: string;
  lastUpdatedTime: string;
  questions: QuestionItem[];
}

export interface QuestionItem {
  _id: string;
  question: string;
  answer: string;
  ideas: string[];
  vocabulary: string[];
}
