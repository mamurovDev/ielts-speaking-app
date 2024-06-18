"use client"
import { Textarea } from "@/components/ui/"
import { useState } from "react";
export default function Page() {
    const [lengthOfWord, setLengthOfWord] = useState(0);
    const [words, setWords] = useState("");
    const handleChangeInputValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setWords(e.target.value);
        setLengthOfWord(length(e.target.value));
    };
    const length = (word: string) => {
        return word.split(" ").filter(Boolean).length;
    };
    return (
        <div className=" h-screen w-full flex items-center flex-col justify-center">
            <div className=" sm:w-[95%] md:w-[80%] max-w-[1200px] flex flex-col">
                <h1 className="text-xl font-semibold">Word count: {lengthOfWord}</h1>
                <p className="text-gray-500 my-2">Type your essay in the box below and the word count will be updated in real time.</p>
                <Textarea className="h-80" placeholder="Paste your essay here..." onChange={(e) => handleChangeInputValue(e)}></Textarea>
            </div>
        </div>
    )
}