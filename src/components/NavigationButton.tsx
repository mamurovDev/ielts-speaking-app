"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { get } from "http";
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
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);


  useEffect(() => {
    async function getNumberOfQuestions() {
      try {
        const response = await fetch(`/api/speaking/${route}/count`);
        const data = await response.json();
        setNumberOfQuestions(data.count);
      } catch (error) {
        console.error(error)
        setNumberOfQuestions(0);
      }
    }
    getNumberOfQuestions();

  }, [route]);

  return (
    <Link href={`/speaking/${route}`} className="w-[95%]" >
      <Button className="mt-2 w-full justify-between items-center" >
        <div className="flex">
          {icon}
          {name}
        </div>
        {numberOfQuestions}
      </Button>
    </Link>
  );
};
