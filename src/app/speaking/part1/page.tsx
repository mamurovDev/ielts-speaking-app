import { Container, Select } from "@/components";
import { ScrollArea } from "@/components/ui/scroll-area";
const tempUrl =
  "https://media.istockphoto.com/id/1094780808/vector/approval-symbol-check-mark-in-a-circle-drawn-by-hand-vector-green-sign-ok-approval-or.jpg?s=612x612&w=0&k=20&c=0mlB50r769kHmLkVcq_HpdNFGdHIA_Cu_tPqN4IKZbc=";
export default function Page() {
  return (
    <ScrollArea className="relative flex flex-col items-center justify-center h-[90%] w-[40%] ml-64">
      <h2 className="text-3xl font-bold absolute top-0 left-0 w-full bg-black z-10 px-4 border-b-[1px] border-slate-800 p-2">
        Questions
      </h2>
      <div className="flex flex-col items-center justify-center w-full h-full mt-16">
        <Select img={tempUrl} question="Hello world!" />
        <Select img={tempUrl} question="Hello world!" />
        <Select img={tempUrl} question="Hello world!" />
   
        <Select img={tempUrl} question="Hello world!" />
        <Select img={tempUrl} question="Hello world!" />
        <Select img={tempUrl} question="Hello world!" />
        <Select img={tempUrl} question="Hello world!" />
        <Select img={tempUrl} question="Hello world!" />
        <Select img={tempUrl} question="Hello world!" />
        <Select img={tempUrl} question="Hello world!" />
        <Select img={tempUrl} question="Hello world!" />
        <Select img={tempUrl} question="Hello world!" />
        <Select img={tempUrl} question="Hello world!" />
        <Select img={tempUrl} question="Hello world!" />
        <Select img={tempUrl} question="Hello world!" />
        <Select img={tempUrl} question="Hello world!" />
        <Select img={tempUrl} question="Hello world!" />
        <Select img={tempUrl} question="Hello world!" />
        <Select img={tempUrl} question="Hello world!" />
        <Select img={tempUrl} question="Hello world!" />
        <Select img={tempUrl} question="Hello world!" />
        <Select img={tempUrl} question="Hello world!" />
        <Select img={tempUrl} question="Hello world!" />
        <Select img={tempUrl} question="Hello world!" />
        <Select img={tempUrl} question="Hello world!" />
      </div>
    </ScrollArea>
  );
}
