"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchQuestions } from "@/store/features/partOneSlice";
import { AppDispatch, RootState } from "@/store/store";
import { PartOneQuestions, QuestionItem } from "@/types";
import { Question } from "@/components";
import { CustomSkeleton } from "@/components/CustomSkeleton";
import { Skeleton } from "@/components/ui";

export default function Page() {
  const finder = (part1: PartOneQuestions[], id: string) => {
    return part1.find((part) => part._id === id);
  };

  const renderContent = (status: string, questions: QuestionItem[]) => {
    if (status !== "succeeded") {
      return Array.from({ length: 10 }).map((_, index) => (
        <CustomSkeleton key={index} />
      ));
    } else {
      return questions.map((part: QuestionItem, index: number) => (
        <Question
          key={part._id + index}
          _id={part._id}
          answer={part.answer}
          question={part.question}
          ideas={part.ideas}
          vocabulary={part.vocabulary}
          order={part.order}
        />
      ));
    }
  }


  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const part1 = useSelector((state: RootState) => state.partOne.part1);
  const status = useSelector((state: RootState) => state.partOne.status);
  const question = finder(part1, Array.isArray(id) ? id[0] : id);
  useEffect(() => {
    if (part1.length === 0) {
      dispatch(fetchQuestions());
    }
  }, [part1]);
  return (
    <ScrollArea className="relative flex flex-col items-center justify-center md:h-[90vh] sm:w-[95%] md:w-[60%] w-full mx-auto">
      <h2 className="items-end flex justify-between sm:text-2xl md:text-3xl absolute top-0 left-0 w-full bg-black z-10 px-4 border-b-[1px] border-slate-800 p-2">
        {status !== "succeeded" ? (<>
          <Skeleton className="h-6 w-40 mb-2" />
          <Skeleton className="h-4 w-20 mb-2" />
        </>) : (<>{question?.name} <span className="sm:text-base md:text-lg">{question?.questions.length} questions</span></>)}

      </h2>
      <div className="flex flex-col  w-full h-full mt-16">
        {renderContent(status, question?.questions || [])}
      </div>
    </ScrollArea>
  );
}
