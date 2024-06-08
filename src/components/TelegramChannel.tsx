"use client"
import Image from "next/image"

type TelegramChannelProps = {
    img: string;
    bio: string;
    name: string;
    username: string;
}
export const TelegramChannel = ({ img, bio, name, username }: TelegramChannelProps) => {
    const redirect = () => {
        window.open(`https://t.me/${username}`, "_blank");
    }
    return (
        <div onClick={redirect} className="w-full flex border rounded-lg items-center  cursor-pointer p-5 my-4">
            <Image loader={() => img} src={img} alt={bio} width={100} height={100} className="circle h-22 w-22" />
            <div className="flex flex-col justify-center pl-3">
                <h2 className="font-bold text-lg">{name}</h2>
                <p>{bio}</p>
            </div>
        </div>
    )
}