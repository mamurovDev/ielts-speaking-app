"use client";

import { Select } from "@/components";
import { ScrollArea } from "@/components/ui";
import { PartOneQuestions, QuestionItem } from "@/types";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestions } from "@/store/features/partOneSlice";
import { AppDispatch } from "@/store/store";
import { CustomSkeleton } from "@/components/CustomSkeleton";
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

export default function Page() {
  const part1 = useSelector((state: any) => state.partOne.part1);
  const status = useSelector((state: any) => state.partOne.status);
  const dispatch = useDispatch<AppDispatch>();

  const previewMaker = (questions: QuestionItem[]): string => {
    if (questions.length > 0) {
      return questions.length < 2
        ? questions[0].question
        : `${questions[0].question} and ${questions.length - 1} more`;
    }
    return "";
  };

  const collectAllQuestions = (part1: PartOneQuestions[]) => {
    return part1?.map((part: PartOneQuestions) => {
      return part.name.toLowerCase();
    })
  }
  const topics = collectAllQuestions(part1);
  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);
  return (
    <>
      {/* <SEO title="IELTS Speaking Part 1 Questions and Answers | AceWise" lang="en-US" canonicalTag={""} description={`Explore a diverse range of topics, including ${topics}, with insightful questions and answers. Discover valuable insights about ${topics} and gain knowledge to enhance your understanding and experience.`}
        keywords={["IELTS Speaking Part 1", "IELTS Speaking Part 1 questions", "IELTS Speaking Part 1 answers", "IELTS Speaking Part 1 topics", "IELTS Speaking Part 1 practice", "IELTS Speaking Part 1 preparation", "IELTS Speaking Part 1 tips", "IELTS Speaking Part 1 techniques", "IELTS Speaking Part 1 strategies", "IELTS Speaking Part 1 ideas", "IELTS Speaking Part 1 vocabulary", "IELTS Speaking Part 1 examples", "IELTS Speaking Part 1 model answers", "IELTS Speaking Part 1 samples", "IELTS Speaking Part 1 exercises", "IELTS Speaking Part 1 resources", "IELTS Speaking Part 1 materials", "IELTS Speaking Part 1 guidance", "IELTS Speaking Part 1 support", "IELTS Speaking Part 1 assistance", "IELTS Speaking Part 1 insights", "IELTS Speaking Part 1 knowledge", "IELTS Speaking Part 1 experience", "IELTS Speaking Part 1 information", "IELTS Speaking Part 1 details", "IELTS Speaking Part 1 data", "IELTS Speaking Part 1 facts", "IELTS Speaking Part 1 intelligence", "IELTS Speaking Part 1 wisdom", "IELTS Speaking Part 1 learning", "IELTS Speaking Part 1 education", "IELTS Speaking Part 1 training", "IELTS Speaking Part 1 skills", "IELTS Speaking Part 1 abilities", "IELTS Speaking Part 1 competencies", "IELTS Speaking Part 1 proficiency", "IELTS Speaking Part 1 mastery", "IELTS Speaking Part 1 performance", "IELTS Speaking Part 1 success", "IELTS Speaking Part 1 achievement", "IELTS Speaking Part 1 accomplishment", "IELTS Speaking Part 1 progress", "IELTS Speaking Part 1 development", "IELTS Speaking Part 1 growth", "IELTS Speaking Part 1 improvement", "IELTS Speaking Part 1 enhancement", "IELTS Speaking Part 1 advancement", "IELTS Speaking Part 1 betterment", "IELTS Speaking Part 1 refinement", "IELTS Speaking Part 1 elevation", "IELTS Speaking Part 1 promotion", "IELTS Speaking Part 1 upliftment", "IELTS Speaking Part 1 upgradation", "IELTS Speaking Part 1 upswing", "IELTS Speaking Part 1 upturn", "IELTS Speaking Part 1 surge", "IELTS Speaking Part 1 boost", "IELTS Speaking Part 1 rise", "IELTS Speaking Part 1 increase", "IELTS Speaking Part 1 jump", "IELTS Speaking Part 1 hike", "IELTS Speaking Part 1 spike", "IELTS Speaking Part 1 growth", "IELTS Speaking Part 1 inflation", "IELTS Speaking Part 1 escalation", "IELTS Speaking Part 1 amplification", "IELTS Speaking Part 1 augmentation", "IELTS Speaking Part 1 multiplication", "IELTS Speaking Part 1 extension", "IELTS Speaking Part 1 expansion", "IELTS Speaking Part 1 broadening", "IELTS Speaking Part 1 widening", "IELTS Speaking Part 1 deepening", "IELTS Speaking Part 1 lengthening", "IELTS Speaking Part 1 stretching", "IELTS Speaking Part 1 distension", "IELTS Speaking Part 1 dilation", "IELTS Speaking Part 1 spread", "IELTS Speaking Part 1 diffusion", "IELTS Speaking Part 1 dispersion", "IELTS Speaking Part 1 proliferation", "IELTS Speaking Part 1 propagation", "IELTS Speaking Part 1 transmission", "IELTS Speaking Part 1 circulation", "IELTS Speaking Part 1 distribution", "IELTS Speaking Part 1 delivery", "IELTS Speaking Part 1 conveyance", "IELTS Speaking Part 1 transfer", "IELTS Speaking Part 1 transportation", "IELTS Speaking Part 1 transference", "IELTS Speaking Part 1 movement", "IELTS Speaking Part 1 shift", "IELTS Speaking Part 1 relocation", "IELTS Speaking Part 1 repositioning", "IELTS Speaking Part 1 change", "IELTS Speaking Part 1 alteration", "IELTS Speaking Part 1 modification", "IELTS Speaking Part 1 adjustment", "IELTS Speaking Part 1 amendment", "IELTS Speaking Part 1 variation", "IELTS Speaking Part 1 transformation", "IELTS Speaking Part 1 conversion", "IELTS Speaking Part 1 metamorphosis", "IELTS Speaking Part 1 transmutation", "IELTS Speaking Part 1 evolution", "IELTS Speaking Part 1 revolution", "IELTS Speaking Part 1 transition", "IELTS Speaking Part 1 progression", "IELTS Speaking Part 1 advance"
          , ...topics]}
        ogTitle="IELTS Speaking Part 1 Practice"
        ogDescription={`Explore a diverse range of topics, including ${topics}, with insightful questions and answers. Discover valuable insights about ${topics} and gain knowledge to enhance your understanding and experience.`}
        ogImage="/part1.png"
        twitterTitle="IELTS Speaking Part 1 Practice"
        twitterDescription={`Explore a diverse range of topics, including ${topics}, with insightful questions and answers. Discover valuable insights about ${topics} and gain knowledge to enhance your understanding and experience.`}
        twitterImage="/part1.png"
        ogUrl={""}
        ogType="website"
        robotsMetaTag="index, follow"
      /> */}
      <ScrollArea className="relative flex flex-col items-center justify-center md:h-[90vh] md:w-[60%] sm:w-[95%] sm:mx-auto">
        <h2 className="items-end flex justify-between sm:text-2xl md:text-3xl absolute top-0 left-0 w-full bg-black z-10 px-4 border-b-[1px] border-slate-800 p-2">
          Questions <span className="md:text-lg sm:text-base">{part1?.length} questions</span>
        </h2>
        <div className="flex flex-col items-center justify-center w-full h-full mt-16">



          {status === "succeeded" ? part1?.map((part: PartOneQuestions, index: number) => (
            <Select
              order={part.order}
              questionId={part._id}
              question={part?.name}
              key={part?._id + part.name.trim() + index}
              author={part.author}
              lastUpdatedTime={part.lastUpdatedTime}
              preview={previewMaker(part.questions)}
            />
          )) : null}

          {
            status === "loading" ?
              <>
                <CustomSkeleton />
                <CustomSkeleton />
                <CustomSkeleton />
                <CustomSkeleton />
                <CustomSkeleton />
                <CustomSkeleton />
                <CustomSkeleton />
                <CustomSkeleton />
                <CustomSkeleton />
                <CustomSkeleton />
              </>
              : null
          }
        </div>
      </ScrollArea></>
  );
}
