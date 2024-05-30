"use client";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { SEO } from "./SEO";
interface Question {
  question: string;
  author: string;
  lastUpdatedTime: string;
  preview: string;
  questionId: string | number;
  order: number;
}

export const Select = ({
  question,
  author,
  lastUpdatedTime,
  preview,
  questionId,
  order,
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
    <>
      <div
        className="mt-2 flex items-center rounded-lg w-full sm:min-h-16 sm:h-auto md:h-24 cursor-pointer bg-main"
        onClick={(event) => handleRedirecter(event)}
      >
        <Badge className="sm:mx-2 md:mx-3 rounded-full h-[50px] w-[50px] flex justify-center text-lg items-center">
          {order}
        </Badge>
        <div className="flex w-full sm:flex-col md:flex-row justify-between">
          <div className="flex flex-col justify-center">
            <h3 className="sm:text-1xl md:text-2xl sm:font-semibold md:font-normal">{question}</h3>
            <p className=" sm:text-sm  md:w-[70%] sm:w-[99%]">{preview}</p>
          </div>
          <div className="flex flex-col h-full mr-4 justify-center min-w-[190px]">
            <div className="w-full flex md:justify-between sm:hidden md:flex">
              <Badge className="">New!</Badge>
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
      </div></>
  );
};
