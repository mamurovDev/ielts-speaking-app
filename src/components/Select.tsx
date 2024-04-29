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
  questionId
}: Question) => {
  const router = useRouter();
  const handleRedirecter = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    router.push("/speaking/part1/" + questionId);
  };

  return (
    <div
      className="mt-2 flex text-white border-[1px] border-slate-800 rounded-lg w-[97%] h-24 cursor-pointer bg-main justify-between"
      onClick={(event) => handleRedirecter(event)}
    >
      <div className="flex flex-col ml-3 justify-center">
        <h3 className="text-3xl">{question}</h3>
        <p className=" text-sm w-[70%]">{preview}</p>
      </div>
      <div className="flex flex-col h-full mr-3 justify-center">
        <div className="w-full flex justify-between">
          <Badge className="bg-orange-500">New!</Badge>
          <time dateTime="2024-04-01 13:45">{lastUpdatedTime}</time>
        </div>
        <p className="flex justify-between">
          Author: <Link href={"user/" + author}> {author}</Link>
        </p>
      </div>
    </div>
  );
};
