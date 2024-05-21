import { QuestionItem } from "@/types";
import { Badge, Button } from "./ui";
import { randomColor } from "@/utils";

export const Question = ({
  _id,
  answer,
  ideas,
  question,
  vocabulary,
  order,
}: QuestionItem) => {
  return (
    <div className="mt-2 flex items-center border-slate-800 rounded-lg sm:min-h-16 sm:h-auto md:h-24 cursor-pointer bg-main justify-between">
      <div className="flex items-center">
        <Badge
          className={
            "sm:mx-2 md:mx-3 rounded-full h-[50px] w-[50px] flex justify-center text-lg"
          }
        >
          {order}
        </Badge>
        <h3 className="sm:text-sm md:text-xl">{question}</h3>
      </div>
      <Button className="h-10 md:mr-4 sm:mr-2">Learn more</Button>
    </div>
  );
};
