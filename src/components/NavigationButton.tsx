import Link from "next/link";
import { Button } from "./ui/button";
import { icons } from "lucide-react";
interface NavigationButton {
  route: string;
  name: string;
  quantityOfQuestions: number;
  icon: React.ReactNode;
}
export const NavigationButton = ({
  route,
  name,
  quantityOfQuestions,
  icon,
}: NavigationButton) => {
  return (
    <Link href={`/speaking/${route}`} className="w-[95%]">
      <Button className="mt-2 w-full justify-between items-center">
        <div className="flex">
          {icon}
          {name}
        </div>
        {quantityOfQuestions}
      </Button>
    </Link>
  );
};
