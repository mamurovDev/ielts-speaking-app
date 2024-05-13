"use client";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface Question {
  question: string;
  author: string;
  lastUpdatedTime: string;
  preview: string;
  questionId: string;
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
      className="mt-2 flex sm:flex-col sm:h-32 text-white border-[1px] border-slate-800 rounded-lg w-[97%] sm:h-auto md:h-24 cursor-pointer bg-main justify-between"
      onClick={(event) => handleRedirecter(event)}
    >
      <div className="flex flex-col ml-3 justify-center">
        <h3 className="sm:text-2xl md:text-3xl">{question}</h3>
        <p className=" sm:text-sm md:text-xl md:w-[70%] sm:w-[99%]">{preview}</p>
      </div>
      <div className="flex flex-col h-full mr-3 justify-center min-w-[190px]">
        <div className="w-full flex md:justify-between sm:justify-end">
          <Badge className="bg-orange-500">New!</Badge>
          <time dateTime="2024-04-01 13:45" className="sm:ml-2">{lastUpdatedTime}</time>
        </div>
        <p className="flex md:justify-between sm:justify-end">
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
