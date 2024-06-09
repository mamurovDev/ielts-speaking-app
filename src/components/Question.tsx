"use client"
import { QuestionItem } from "@/types";
import { Badge, Button } from "./ui";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { toast } from "sonner";
export const Question = ({
  _id,
  answer,
  ideas,
  question,
  vocabulary,
  order,
}: QuestionItem) => {
  const router = useRouter();
  const { id } = useParams();

  const handleRedirecter = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    router.push(id + "/" + _id)
  };

  return (
    <div className="mt-2 flex items-center rounded-lg sm:min-h-16 sm:h-auto md:h-24 cursor-pointer bg-main justify-between"
      onClick={(e) => { handleRedirecter(e) }}
    >
      <div className="flex items-center">
        <Badge
          className={
            "sm:mx-2 md:mx-3 rounded-full h-[50px] w-[50px] flex justify-center text-lg"
          }
        >
          {order}
        </Badge>
        <h3 className="sm:text-sm md:text-xl sm:w-[80%] md:w-auto">{question}</h3>
      </div>
      <Button className="md:mr-4 sm:mr-2 sm:text-xs md:text-sm">Learn more</Button>
    </div >
  );
};
