"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger, Card, CardContent, CardHeader, CardTitle, CardDescription, Button, Skeleton } from "@/components/ui"
import { fetchPartTwoQuestions, selectQuestionByPartId } from "@/store/features/partTwoSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AccordionTrigger, Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { QuestionPoint } from "@/types"
export default function Page() {
    const { partTwoID } = useParams<{ partTwoID: string }>();
    const foundQuestion = useSelector((state: RootState) => selectQuestionByPartId(state, partTwoID));
    const part2 = useSelector((state: RootState) => state.partTwo.part2)
    const dispatch = useDispatch<AppDispatch>();
    const status = useSelector((state: RootState) => state.partTwo.status)

    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href);
    }

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

    useEffect(() => {
        part2.length === 0 && dispatch(fetchPartTwoQuestions());
    }, []);
    console.log(foundQuestion?.answers)

    return <div className=" flex flex-col mx-auto md:w-[500px] sm:w-[90%]">
        <h2 className="sm:mt-20 md:m-0">{foundQuestion?.name || <Skeleton className="h-4 w-20 mb-2" />}</h2>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight my-5">{foundQuestion?.question || <Skeleton className="h-5 w-56 mb-2" />}</h3>

        <Tabs defaultValue="vocabulary" className="md:w-[500px]">
            <TabsList className="grid w-full grid-cols-3    bg-main">
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
                            {renderContent(status, foundQuestion?.vocabulary)}

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
                        <Accordion type="single" collapsible className="w-full">
                            {foundQuestion?.points?.map((item: QuestionPoint, index: number) => (
                                <AccordionItem value={item._id} key={index + item._id}>
                                    <AccordionTrigger>{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                            {item.answers.map((answer, index) => (
                                                <li key={index}>{answer}</li>
                                            ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
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
                        {foundQuestion?.answers?.map((item: string, index: number) => (
                            <p key={index}>{item}</p>

                        ))}
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
        <Button className="self-center mt-5" onClick={copyToClipboard}>Share</Button>
    </div>;
}