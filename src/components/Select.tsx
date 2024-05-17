"use client";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
interface Question {
  question: string;
  author: string;
  lastUpdatedTime: string;
  preview: string;
  questionId: string | number;
}

export const Select = ({
  question,
  author,
  lastUpdatedTime,
  preview,
  questionId,
}: Question) => {
  const router = useRouter();
  const handleRedirecter = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (event.target instanceof HTMLButtonElement) {
      router.push("/user/" + author);
    } else {
      router.push("part1/" + questionId);
    }
  };
  return (
    <div
      className="mt-2 flex sm:flex-col md:flex-row  text-white border-[1px] border-slate-800 rounded-lg w-[97%] sm:min-h-16 sm:h-auto md:h-24 cursor-pointer bg-main justify-between"
      onClick={(event) => handleRedirecter(event)}
    >
      <div className="flex flex-col ml-3 justify-center">
        <h3 className="sm:text-2xl md:text-3xl">{question}</h3>
        <p className=" sm:text-sm  md:w-[70%] sm:w-[99%]">{preview}</p>
      </div>
      <div className="flex flex-col h-full mr-3 justify-center min-w-[190px]">
        <div className="w-full flex md:justify-between sm:hidden md:flex">
          <Badge className="bg-orange-500">New!</Badge>
          <time dateTime="2024-04-01 13:45" className="sm:ml-2">
            {lastUpdatedTime}
          </time>
        </div>
        <p className="flex md:justify-between sm:hidden md:flex">
          Author:{" "}
          <button
            className="text-orange-500 sm:ml-2"
            onClick={(event) => handleRedirecter(event)}
          >
            {author}
          </button>
        </p>
      </div>
    </div>
  );
};
