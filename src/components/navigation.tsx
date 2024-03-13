import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GraduationCap, MessagesSquare, Speech } from "lucide-react";
import Link from "next/link";
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/topics/");
  const data = await res.json();
  return data;
};

export const Navigation = async () => {
  let data = await getData();
  return (
    <nav className="flex flex-col h-[90%] w-72 border-[1px] border-slate-800 rounded-lg ml-2 self-center items-center">
      <div className="w-[95%] flex items-center mt-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="ml-2"> Nurmuhammad</p>
      </div>
      <div className="mt-8 flex flex-col w-full items-center">
        <h2 className="font-bold self-start ml-2 text-3xl">Speaking</h2>
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
        <Link href={"/part2"} className="w-[95%]">
          <Button className="mt-2 w-full justify-between items-center">
            <div className="flex">
              <MessagesSquare className="mr-2" />
              Part 2
            </div>
            45
          </Button>
        </Link>
        <Link href={"/part3"} className="w-[95%]">
          <Button className="mt-2 w-full justify-between items-center">
            <div className="flex">
              <Speech className="mr-2" />
              Part 3
            </div>
            45
          </Button>
        </Link>
      </div>
    </nav>
  );
};
