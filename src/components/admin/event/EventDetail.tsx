import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import {HiOutlineClipboardDocumentList} from "react-icons/hi2";
import React from "react";
import Image from "next/image";
import {RiCalendarScheduleLine} from "react-icons/ri";
import {TfiAlarmClock} from "react-icons/tfi";
import {FaMapLocationDot} from "react-icons/fa6";
import {IoDocumentTextOutline} from "react-icons/io5";
import {FiUsers} from "react-icons/fi";
import { format } from "date-fns";


type EventDetailProps = {
    event: {
        id: string;
        eventName: string;
        createBy: string;
        startDate: string;
        endDate: string;
        location: string;
        status: string;
        image: string;
        description: string;
    }
}

export function EventDetail({event}: EventDetailProps) {
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
                className="sm:max-w-[425px] lg:max-w-[80%]  bg-khotixs-background-white rounded-[6px] ">
                <h1 className=" text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text ">
                    VIEW DETAIL EVENT
                </h1>
                <section className=" rounded-[6px] border border-gray-400 p-5 ">
                    <h1 className=" text-primary-color text-base md:text-lg xl:text-2xl font-bold mb-5 ">{event.eventName}
                    </h1>
                    <section className=" flex gap-5 ">
                        <section className=" w-[50%] space-y-3 ">
                            <div className=" flex items-center space-x-2 ">
                                <RiCalendarScheduleLine className=" h-5 w-5 text-description-color "/>
                                <p className=" text-description-color text-base md:text-lg xl:text-xl ">{event.startDate}</p>
                            </div>

                            <div className="flex items-center space-x-2">
                                <TfiAlarmClock className="h-5 w-5 text-description-color"/>
                                <p className=" text-description-color text-base md:text-lg xl:text-xl ">{`${format(new Date(event.startDate), "HH:mm")} - ${format(new Date(event.endDate), "HH:mm")}`}</p>
                            </div>

                            <div className=" flex items-center space-x-2 ">
                                <FaMapLocationDot className=" h-5 w-5 text-gray-500 "/>
                                <p className=" text-description-color text-base md:text-lg xl:text-xl ">{event.location}</p>
                            </div>
                            <div className=" flex items-center space-x-2 ">
                                <IoDocumentTextOutline className=" h-5 w-5 text-description-color "/>
                                <p className=" text-description-color text-base md:text-lg xl:text-xl ">{event.id} attendees</p>

                            </div>
                            <div className=" flex flex-col w-full">
                                <p className=" text-description-color text-base md:text-lg xl:text-xl font-semibold ">EVENT DESCRIPTION </p>
                                <p className=" text-description-color text-base md:text-lg xl:text-xl pr-10">{event.description}</p>
                            </div>
                            <div className=" flex flex-col ">
                                <p className=" text-description-color text-base md:text-lg xl:text-xl font-semibold">ORGANIZER </p>
                                <div className=" flex items-center space-x-2 ">
                                    <FiUsers className=" h-5 w-5 text-description-color "/>
                                    <p className=" text-description-color text-base md:text-lg xl:text-xl ">{event.createBy}</p>
                                </div>
                            </div>
                        </section>
                        <Image className=" w-[50%] rounded-[6px]" unoptimized width={100} height={100} src={event.image}
                               alt={event.eventName}/>
                    </section>
                </section>


            </DialogContent>
        </Dialog>
    )
}