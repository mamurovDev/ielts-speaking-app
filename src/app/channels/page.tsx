"use client"
import { useEffect } from "react"
import { fetchTelegramChannels } from "@/store/features/telegramChannelSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { TelegramChannel } from "@/components";
import { ScrollArea } from "@/components/ui/";
export default function Page() {
    const dispatch = useDispatch<AppDispatch>();
    const channels = useSelector((state: RootState) => state.telegramChannels.telegramChannels);
    console.log(channels)
    useEffect(() => {
        dispatch(fetchTelegramChannels())
    }, [dispatch])

    return <div className="flex flex-col items-center w-full">
        {/* <ScrollArea className="border">
            {channels?.map(item => {
                return (
                    <TelegramChannel {...item} key={item._id} />
                )
            })}
        </ScrollArea> */}

        <ScrollArea className="relative flex flex-col items-center justify-center sm:h-screen md:h-[90vh] sm:w-[95%] md:w-[60%] w-full mx-auto">
            <h2 className="items-end flex justify-between sm:text-2xl md:text-3xl top-0 left-0 w-full bg-black z-10 px-4 border-b-[1px] border-slate-800 p-2">
                Telegram channels the author finds useful
            </h2>
            {channels?.map(item => {
                return (
                    <TelegramChannel {...item} key={item._id} />
                )
            })}
        </ScrollArea>
    </div>
}