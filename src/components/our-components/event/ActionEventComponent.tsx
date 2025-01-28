'use client';
import { Button } from "@/components/ui/button";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { IoMdMore } from "react-icons/io";
import React from "react";
import { EventDetail } from "@/components/our-components/event/EventDetail";
import {useRouter} from "next/navigation";
import {EventType} from "@/lib/admin/Event";

type ActionEventComponentProps = {
    event: EventType;
}

export function ActionEventComponent({ event }: ActionEventComponentProps) {
    const router = useRouter();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button><IoMdMore className=" w-5 h-5 text-gray-500 cursor-pointer" /></Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto">
                <div className="flex flex-col p-2 w-full ">
                    <p className=" text-description-color text-base"> Action</p>
                    <div
                        onClick={() => router.push(`/payment-data`)}
                        className="text-sm text-description-color text-start hover:bg-gray-100 rounded-[6px] flex cursor-pointer items-center p-1">
                        <HiOutlineNewspaper className=" h-5 w-5 " />
                        <p className=" w-[100px] px-1">View Payment</p>
                    </div>
                    <EventDetail event={event} />
                </div>
            </PopoverContent>
        </Popover>
    );
}