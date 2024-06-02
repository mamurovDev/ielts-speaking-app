"use client";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "next/navigation";
import { fetchQuestions, selectQuestionsByPartId } from "@/store/features/partOneSlice";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/store/store";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export default function Page() {
    const { id, question } = useParams<{ id: string | string[], question: string }>();
    const partId = Array.isArray(id) ? id[0] : id;
    const questionId = Array.isArray(question) ? question[0] : question;
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchQuestions());
    }, [dispatch]);
    const foundQuestion = useSelector((state: RootState) => selectQuestionsByPartId(state, partId, questionId));
    return (
        <div className="">
            <h2 className="sm:mt-20 md:m-0">{foundQuestion.title}</h2>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight my-5">{foundQuestion.question}</h3>
            <Tabs defaultValue="vocabulary" className="md:w-[500px]">
                <TabsList className="grid w-full grid-cols-3 bg-main">
                    <TabsTrigger value="vocabulary" className="">Vocabulary</TabsTrigger>
                    <TabsTrigger value="ideas">Ideas</TabsTrigger>
                    <TabsTrigger value="answer">Answer</TabsTrigger>
                </TabsList>
                <TabsContent value="vocabulary" >
                    <Card className="">
                        <CardHeader>
                            <CardTitle className="">Vocabulary</CardTitle>
                            <CardDescription className="" >
                                Here you can get some vocabulary to help you with your answer.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                {foundQuestion.vocabulary?.map((word: string) => <li key={word}>{word}</li>)}
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
                                {foundQuestion.ideas?.map((idea: string) => <li key={idea}>{idea}</li>)}
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
        </div>
    )
}
