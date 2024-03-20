import { Badge } from "@/components/ui/badge";

interface Question {
  img: string;
  question: string;
}

export const Select = ({ img, question }: Question) => {
  return (
    <div className=" mt-2 grid grid-rows-2 grid-cols-2 items-center justify-center text-white  border-[1px] border-slate-800 rounded-lg w-[97%] h-32 cursor-pointer">
      <h3 className="text-3xl">Hometown</h3>
      <Badge className="bg-orange-500">New!</Badge>
      <p className=" text-sm">
        Do you work or are you a student? What job do you do? What subjects are
        you stying?
      </p>
      <p className="">
        Author: <a href="#">@nurmuhammad</a>
      </p>
    </div>
  );
};
