import { Container, Select } from "@/components";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PartOneQuestions, QuestionItem } from "@/types";
interface Part {
  questions: Question[];
  _id: string;
  name: string;
  author: string;
  lastUpdatedTime: string;
}

interface Question {
  question: string;
  answer: string;
}

interface FetchedData {
  part1: Part[];
}

export default async function Page() {
  const getPart1 = async (): Promise<
    { part1: PartOneQuestions[] } | undefined
  > => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/speaking`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error + "error from c");
    }
  };

  const part1 = await getPart1();

  const previewMaker = (questions: QuestionItem[]): string => {
    if (questions.length > 0) {
      return questions.length < 2
        ? questions[0].question
        : `${questions[0].question} and ${questions.length - 1} more`;
    }
    return "";
  };
  return (
    <ScrollArea className="relative flex flex-col items-center justify-center h-[90%] w-[40%] ml-64">
      <h2 className="items-end flex justify-between text-3xl font-bold absolute top-0 left-0 w-full bg-black z-10 px-4 border-b-[1px] border-slate-800 p-2">
        Questions{" "}
        <span className="text-lg">{part1?.part1.length} questions</span>
      </h2>
      <div className="flex flex-col items-center justify-center w-full h-full mt-16">
        {part1?.part1.map((part) => (
          <Select
            questionId={part._id}
            question={part?.name}
            key={part?._id}
            author={part.author}
            lastUpdatedTime={part.lastUpdatedTime}
            preview={previewMaker(part.questions)}
          />
        ))}
      </div>
    </ScrollArea>
  );
}
