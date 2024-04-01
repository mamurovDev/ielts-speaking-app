import { Badge } from "@/components/ui/badge";
import Link from "next/link";
interface Question {
  img: string;
  question: string;
}

export const Select = ({ img, question }: Question) => {
  return (
    <div className="mt-2 flex text-white border-[1px] border-slate-800 rounded-lg w-[97%] h-24 cursor-pointer bg-main">
      <div className="flex flex-col ml-3 justify-center">
        <h3 className="text-3xl">Hometown</h3>
        <p className=" text-sm w-[60%]">
          Do you work or are you a student? What job do you do? What subjects
          are you stying?
        </p>
      </div>
      <div className="flex flex-col h-full mr-3 justify-center">
        <div className="w-full flex justify-between">
          <Badge className="bg-orange-500">New!</Badge>
          <time dateTime="2024-04-01 13:45">1st April, 2024 </time>
        </div>
        <p className="flex justify-between">
          Author:<Link href={"user/nurmuhammad"}>@nurmuhammad</Link>
        </p>
      </div>
    </div>
  );
};
