"use client";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SEO } from "./SEO";
import { toast } from "sonner";
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

    router.push("part1/" + questionId);

  };

  const handleShare = (e) => {
    e?.stopPropagation();
    navigator.clipboard.writeText(window.location.href + "/" + questionId);
    toast("Link copied to clipboard");
  }

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

        </div>
        <Button className="mr-3" onClick={(e) => handleShare(e)}>Share</Button>
      </div></>
  );
};
