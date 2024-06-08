"use client";
import { set } from "mongoose";
import { useState } from "react";

export default function Page() {
    const [username, setUsername] = useState("");
    const [status, setStatus] = useState<"initial" | "error" | "success">("initial"); // [1
    async function handleSubmit(e: any) {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            const res = await fetch("https://telegram-username-info.onrender.com/" + username);
            if (!res.ok) {
                throw new Error("Failed to fetch telegram channel");
            }
            const telegramChannel = await res.json();
            const response = await fetch("api/tg/", {
                method: "POST",
                body: JSON.stringify({
                    name: telegramChannel.name,
                    username: telegramChannel.username,
                    img: telegramChannel.profilePhotoUrl,
                    bio: telegramChannel.bio || "",
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            setStatus("success");
            setUsername("");
        } catch (error) {
            console.error("Error adding new telegram channel: ", error);
            setStatus("error");
        }
    }

    return (
        <div className="flex items-center justify-center w-full h-screen text-white flex-col" >
            {status}
            <form onSubmit={handleSubmit} className="my-5"> 
                <input
                    type="text"
                    className="text-white p-1"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit" className="mx-5 outline p-2 rounded">Submit</button>
            </form>
        </div>
    );
}
