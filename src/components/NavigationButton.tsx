"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
interface NavigationButton {
  route: string;
  name: string;
  icon: React.ReactNode;
}
export const NavigationButton = ({
  route,
  name,
  icon,
}: NavigationButton) => {
  const numberOfQuestions: number = useSelector((state: any) => state?.partOne[route]?.length) || 0;
  return (
    <Link href={`/speaking/${route}`} className="w-[95%]" >
      <Button className="mt-2 w-full justify-between items-center">
        <div className="flex">
          {icon}
          {name}
        </div>
        {numberOfQuestions}
      </Button>
    </Link>
  );
};
