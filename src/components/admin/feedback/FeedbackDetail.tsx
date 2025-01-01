import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import {HiOutlineClipboardDocumentList} from "react-icons/hi2";
import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import {FiUsers} from "react-icons/fi";

type FeedbackType = {
    data: {
        id: string;
        name: string;
        email: string;
        createDate: string;
        description: string;
    }
}

export function FeedbackDetail({data}: FeedbackType) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div
                    className="text-sm text-description-color text-start hover:bg-gray-100 rounded-[6px] flex cursor-pointer items-center p-1">
                    <HiOutlineClipboardDocumentList className=" h-5 w-5 "/>
                    <p className=" w-[100px] px-1">View Detail</p>
                </div>
            </DialogTrigger>
            <DialogContent
                className="max-w-[60%]  bg-khotixs-background-white rounded-[6px] ">
                <h1 className=" text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text ">
                    VIEW DETAIL FEEDBACK
                </h1>
                <section className=" rounded-[6px] border border-gray-400 p-5 ">

                    <section className=" w-full flex gap-5 ">
                        <section className=" w-full space-y-3 ">
                            <div className=" flex flex-col ">
                                <p className=" text-description-color text-base md:text-lg xl:text-xl font-semibold">USER </p>
                                <div className=" flex items-center space-x-2 ">
                                    <FiUsers className=" h-5 w-5 text-description-color "/>
                                    <p className=" text-description-color text-base md:text-lg xl:text-xl ">{data.name}</p>
                                </div>
                            </div>
                            <div className=" flex flex-col ">
                                <p className=" text-description-color text-base md:text-lg xl:text-xl font-semibold">DATE </p>
                                <div className=" flex items-center space-x-2 ">
                                    <FiUsers className=" h-5 w-5 text-description-color "/>
                                    <p className=" text-description-color text-base md:text-lg xl:text-xl ">{data.createDate}</p>
                                </div>
                            </div>
                            <div className=" flex flex-col ">
                                <p className=" text-description-color text-base md:text-lg xl:text-xl font-semibold">GMAIL </p>
                                <div className=" flex items-center space-x-2 ">
                                    <MdOutlineMailOutline className=" h-5 w-5 text-gray-500 "/>
                                    <p className=" text-description-color text-base md:text-lg xl:text-xl ">{data.email}</p>
                                </div>
                            </div>
                            <div className=" flex flex-col w-full">
                                <p className=" text-description-color text-base md:text-lg xl:text-xl font-semibold ">EVENT
                                    DESCRIPTION </p>
                                <p className=" text-description-color text-base md:text-lg xl:text-xl pr-10">{data.description}</p>
                            </div>

                        </section>
                    </section>
                </section>
            </DialogContent>
        </Dialog>
    )
}