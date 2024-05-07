export interface PartOneQuestions {
  _id: string;
  name: string;
  author: string;
  lastUpdatedTime: string;
  questions: QuestionItem[];
}

export interface QuestionItem {
  question: string;
  answer: string;
  ideas: string[];
  vocabulary: string[];
}
