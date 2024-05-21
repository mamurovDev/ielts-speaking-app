"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchQuestions } from "@/store/features/partOneSlice";
import { AppDispatch } from "@/store/store";
import { PartOneQuestions } from "@/types";
import { Question } from "@/components";

export default function Page() {
  const finder = (part1: PartOneQuestions[], id: string) =>
    part1.find((part) => part._id === id);

  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const part1 = useSelector((state: any) => state.partOne.partOne);
  const question = finder(part1, Array.isArray(id) ? id[0] : id);
  useEffect(() => {
    if (part1.length === 0) {
      dispatch(fetchQuestions());
    }
  });
  return (
    <ScrollArea className=" relative flex flex-col items-center justify-center h-[90vh] w-[40%] md:ml-64 sm:w-[100%]">
      <h2 className="items-end flex justify-between text-3xl font-bold absolute top-0 left-0 w-full bg-black z-10 px-4 border-b-[1px] border-slate-800 p-2">
        {question?.name}
        <span className="text-lg">{question?.questions.length} questions</span>
      </h2>
      <div className="flex flex-col  w-full h-full mt-16">
        {question?.questions && question?.questions.length > 0 ? (
          question?.questions.map((q, index) => (
            <div key={q._id + index}>
              <Question
                key={q._id + index}
                _id={q._id}
                answer={q.answer}
                question={q.question}
                ideas={q.ideas}
                vocabulary={q.vocabulary}
                order={q.order}
              />
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </ScrollArea>
  );
}
