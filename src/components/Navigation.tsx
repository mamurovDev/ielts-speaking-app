import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return <Button>Button</Button>;
}

export const Navigation = () => {
  return (
    <div className="flex flex-col h-[95%] w-72 border border-orange-500 rounded-lg ml-2 self-center items-center">
      <Button className="mt-10 w-[95%]">Part 1</Button>
      <Button className="mt-10 w-[95%]">Part 2</Button>
      <Button className="mt-10 w-[95%]">Part 3</Button>
    </div>
  );
};
