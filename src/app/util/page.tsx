"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui";
export default function Page() {
    const [text, setText] = useState<string>("");
    const [response, setResponse] = useState<WordData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleRequest = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const url = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
            const response = await fetch(`${url}/api/gemini`, {
                method: "POST",
                body: JSON.stringify({ prompt: text }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            setResponse(parseJsonToWordData(data.text));
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
            setText(""); // Reset the text state
            if (textareaRef.current) {
                textareaRef.current.blur(); // Remove focus from the textarea
            }
        }
    };

    interface WordData {
        word: string;
        definition: string;
        example: string;
        translationToUzbek: string;
    }

    function parseJsonToWordData(jsonString: string): WordData[] {
        try {
            // Remove markdown and parse JSON string
            const cleanedJsonString = jsonString.replace(/^```json\n|```$/g, '');
            const jsonData: WordData[] = JSON.parse(cleanedJsonString);

            // Map JSON data to desired structure
            const wordDataArray: WordData[] = jsonData.map((item: WordData) => ({
                word: item.word || '',
                definition: item.definition || '',
                example: item.example || '',
                translationToUzbek: item.translationToUzbek || '',
            }));

            return wordDataArray;
        } catch (error) {
            console.error('Error parsing JSON:', error);
            return [];
        }
    }

    return (
        <div className="w-full flex flex-col items-center">
            <form className="sm:w-[95%] md:w-[80%] max-w-[1200px] flex flex-col" onSubmit={handleRequest}>
                <h1 className="text-xl font-semibold mt-10">Find unknown words with their definitions</h1>
                <p className="text-gray-500 my-2">Type your text here so that the AI can return potential unkown words for you</p>
                <textarea
                    className="w-full md:h-96 p-2 sm:h-60"
                    required
                    placeholder="Enter your text here"
                    value={text} // Bind the textarea value to the text state
                    onChange={(e) => setText(e.target.value)}
                    ref={textareaRef} // Attach ref to the textarea
                ></textarea>
                <Button type="submit" className="border p-3 mt-3" disabled={loading} variant={"secondary"}>
                    {loading ? "Working on it..." : 'Submit'}
                </Button>
                {response.length > 0 ? (
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                        {response.map((wordData, index) => (
                            <li key={index} className="my-8">
                                <h2 className="font-semibold text-2xl flex">
                                    {wordData.word} <span className="mx-3">-</span>
                                    <em className="text-xl font-normal">{wordData.translationToUzbek}</em>
                                </h2>
                                <hr />
                                <p className="my-2 font-semibold text-lg">{wordData.definition}</p>
                                <i>{wordData.example}</i>
                            </li>
                        ))}
                    </ul>
                ) : (
                    null
                )}
            </form>
        </div>
    );
}
