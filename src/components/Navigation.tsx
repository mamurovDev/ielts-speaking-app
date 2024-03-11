import { Button } from "@/components/ui/button";
import { GraduationCap, MessagesSquare, Speech } from "lucide-react";
import Link from "next/link";
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/topics/");
  const data = await res.json();
  return data;
};

export const Navigation = async () => {
  let data = await getData();
  console.log(data);
  return (
    <div className="flex flex-col h-[95%] w-72 border-[1px] border-gray-800 rounded-lg ml-2 self-center items-center">
      <Link href={"/part1"} className="w-[95%]">
        <Button
          className="mt-2 w-full justify-between items-center"
          variant={"secondary"}
        >
          <div className="flex">
            <GraduationCap className="mr-2" />
            Part 1
          </div>
          {data?.part1.length}
        </Button>
      </Link>
      <Button className="mt-2 w-[95%] justify-between items-center">
        <div className="flex">
          <MessagesSquare className="mr-2" />
          Part 2
        </div>
        45
      </Button>
      <Button className="mt-2 w-[95%] justify-between items-center">
        <div className="flex">
          <Speech className="mr-2" />
          Part 3
        </div>
        45
      </Button>
    </div>
  );
};
