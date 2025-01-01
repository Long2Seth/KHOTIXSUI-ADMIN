
'use client';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { IoMdMore } from "react-icons/io";
import React from "react";
import {FeedbackDetail} from "@/components/admin/feedback/FeedbackDetail";

type FeedbackType = {
    data: {
        id: string;
        name: string;
        email: string;
        createDate: string;
        description: string;
    }
}

export function ActionFeedbackComponent({data}: FeedbackType) {

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button><IoMdMore className=" w-5 h-5 text-gray-500 cursor-pointer" /></Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto">
                <div className="flex flex-col p-2 w-full ">
                    <p className=" text-description-color text-base"> Action</p>
                    <div
                        className="text-sm text-description-color text-start hover:bg-gray-100 rounded-[6px] flex cursor-pointer items-center p-1">
                        <FeedbackDetail data={data} />
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}