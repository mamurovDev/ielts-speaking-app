"use client"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollArea, Skeleton } from "@/components/ui";
import { CustomSkeleton, Select } from "@/components";
import { AppDispatch, RootState } from "@/store/store";
import { fetchPartTwoQuestions } from "@/store/features/partTwoSlice";
import { PartTwoQuestion } from "@/types";
function Page() {
  const dispatch = useDispatch<AppDispatch>();
  const part2 = useSelector((state: RootState) => state.partTwo.part2)
  const status = useSelector((state: RootState) => state.partTwo.status)
  useEffect(() => {
    part2.length === 0 && dispatch(fetchPartTwoQuestions());
  }, []);

  const renderContent = (status: string, questions?: PartTwoQuestion[]) => {
    if (status !== "succeeded") {
      return Array.from({ length: 10 }).map((_, index) => (
        <CustomSkeleton key={index} />
      ));
    } else {
      return questions?.map((part: PartTwoQuestion, index: number) => (
        <Select
          order={part.order}
          questionId={part._id}
          question={part?.name}
          key={part?._id + part.name.trim() + index}
          preview={part.question}
          type="part2"
        />
      ))
    }
  }


  return <>
    <ScrollArea className="relative flex flex-col items-center justify-center md:h-[90vh] md:w-[60%] sm:w-[95%] sm:mx-auto">
      <h2 className="items-end flex justify-between sm:text-2xl md:text-3xl absolute top-0 left-0 w-full bg-black z-10 px-4 border-b-[1px] border-slate-800 p-2">
        Questions <span className="md:text-lg sm:text-base">{part2?.length ? part2.length + " questions" : <Skeleton className="h-4 w-28 mb-2" />}</span>
      </h2>
      <div className="flex flex-col items-center justify-center w-full h-full mt-16">

        {renderContent(status, part2)}
      </div>
    </ScrollArea>
  </>;
}

export default Page;
