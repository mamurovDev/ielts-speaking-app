"use client";

import { Select } from "@/components";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PartOneQuestions, QuestionItem } from "@/types";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestions } from "@/store/features/partOneSlice";
import { AppDispatch } from "@/store/store";
interface Part {
  questions: Question[];
  _id: string;
  name: string;
  author: string;
  lastUpdatedTime: string;
}

interface Question {
  question: string;
  answer: string;
}

export default function Page() {
  const part1 = useSelector((state: any) => state.partOne.partOne);
  const dispatch = useDispatch<AppDispatch>();
  const previewMaker = (questions: QuestionItem[]): string => {
    if (questions.length > 0) {
      return questions.length < 2
        ? questions[0].question
        : `${questions[0].question} and ${questions.length - 1} more`;
    }
    return "";
  };

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);
  return (
    <ScrollArea className="relative flex flex-col items-center justify-center h-[90vh] w-[40%] md:ml-64 sm:w-[100%]">
      <h2 className="items-end flex justify-between text-3xl font-bold absolute top-0 left-0 w-full bg-black z-10 px-4 border-b-[1px] border-slate-800 p-2">
        Questions <span className="text-lg">{part1?.length} questions</span>
      </h2>
      <div className="flex flex-col items-center justify-center w-full h-full mt-16">
        {part1.map((part: PartOneQuestions, index: number) => (
          <Select
            questionId={part._id}
            question={part?.name}
            key={part?._id + part.name.trim() + index}
            author={part.author}
            lastUpdatedTime={part.lastUpdatedTime}
            preview={previewMaker(part.questions)}
          />
        ))}
      </div>
    </ScrollArea>
  );
}
