export interface PartOneQuestions {
  _id: string;
  name: string;
  author: string;
  lastUpdatedTime: string;
  questions: QuestionItem[];
  order: number;
}

export interface QuestionItem {
  _id: string;
  order: number;
  question: string;
  answer: string;
  ideas: string[];
  vocabulary: string[];
}
