import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GraduationCap, MessagesSquare, Speech } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NavigationButton } from "./NavigationButton";

export const Navigation = async () => {
  return (
    <aside className="h-screen sm:hidden md:flex ml-3">
      <ScrollArea className=" flex-col h-[90%] w-72 border-[1px] border-slate-800 rounded-lg self-center items-center bg-main">
        <div className="w-[95%] flex items-center mt-2">
          <Avatar className="ml-2">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="ml-2">Nurmuhammad</p>
        </div>
        <hr className="w-[92%] border-slate-700 mt-2" />
        <div className="mt-8 flex flex-col w-full items-center">
          <h2 className="font-bold self-start ml-2 text-3xl">Speaking</h2>

          <NavigationButton
            name="Part 1"
            icon={<GraduationCap className="mr-2" />}
            route="part1"
          />
          <NavigationButton
            name="Part 2"
            icon={<MessagesSquare className="mr-2" />}
            route="part2"
          />
          <NavigationButton
            name="Part 3"
            icon={<Speech className="mr-2" />}
            route="part3"
          />
        </div>
      </ScrollArea>
    </aside>
  );
};
