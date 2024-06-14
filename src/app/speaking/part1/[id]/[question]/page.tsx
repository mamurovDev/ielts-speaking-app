"use client";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "next/navigation";
import { fetchQuestions, selectQuestionByPartId } from "@/store/features/partOneSlice";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/store/store";
import { toast } from "sonner";
import { ScrollArea } from "@/components/ui";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui";
const renderContent = (status: string, vocabulary?: string[]) => {
    if (status !== "succeeded") {
        return Array.from({ length: 3 }).map((_, index) => (
            <li key={index}>
                <Skeleton className="h-3 w-36 mb-2 bg-white" />
            </li>
        ));
    } else {
        return (vocabulary || []).map((word) => (
            <li key={word}>{word}</li>
        ));
    }
};

export default function Page() {
    const status = useSelector((state: RootState) => state.partOne.status);
    const part1 = useSelector((state: RootState) => state.partOne.part1);

    const { id, question } = useParams<{ id: string | string[], question: string }>();
    const partId = Array.isArray(id) ? id[0] : id;
    const questionId = Array.isArray(question) ? question[0] : question;
    const foundQuestion = useSelector((state: RootState) => selectQuestionByPartId(state, partId, questionId));
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        part1.length === 0 && dispatch(fetchQuestions());
    }, [part1]);



    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href);
        toast("Link copied to clipboard");
    }

    return (
        <div className=" flex flex-col mx-auto md:w-[500px] sm:w-[90%]">
            <h2 className="sm:mt-20 md:m-0">{foundQuestion.title || <Skeleton className="h-4 w-20 mb-2" />}</h2>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight my-5">{foundQuestion.question || <Skeleton className="h-5 w-56 mb-2" />

            }</h3>

            <Tabs defaultValue="vocabulary" className="md:w-[500px]">
                <TabsList className="grid w-full grid-cols-3 bg-main">
                    <TabsTrigger value="vocabulary" className="">Vocabulary</TabsTrigger>
                    <TabsTrigger value="ideas">Ideas</TabsTrigger>
                    <TabsTrigger value="answer">Answer</TabsTrigger>
                </TabsList>
                <TabsContent value="vocabulary" >
                    <Card>
                        <CardHeader>
                            <CardTitle className="">Vocabulary</CardTitle>
                            <CardDescription className="" >
                                Here you can get some vocabulary to help you with your answer.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                {renderContent(status, foundQuestion.vocabulary)}

                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="ideas">
                    <Card>
                        <CardHeader>
                            <CardTitle>Ideas</CardTitle>
                            <CardDescription>
                                Here you can get some ideas to help you with your answer.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                {renderContent(status, foundQuestion.ideas)}

                            </ul>
                        </CardContent>

                    </Card>
                </TabsContent>
                <TabsContent value="answer">
                    <Card>
                        <CardHeader>
                            <CardTitle>Answer</CardTitle>
                            <CardDescription>
                                Here you can read a sample aswer.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <p>{foundQuestion.answer}</p>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
            <Button className="self-center mt-5" onClick={copyToClipboard}>Share</Button>
        </div>
    )
}
