'use client'

import React, {useState} from "react"
import {Card} from "@/components/ui/card"
import {PiUserCircleLight} from "react-icons/pi";
import {TbScanPosition} from "react-icons/tb";
import {FiPhone} from "react-icons/fi";
import {HiOutlineMail} from "react-icons/hi";
import {GrLocation} from "react-icons/gr";
import {SlNote} from "react-icons/sl";
import Image from "next/image";
import EditProfile from "@/components/admin/EditProfile";

type ProfileData = {
    name: string
    role: string
    email: string
    phone: string
    address: string
    description: string
    createdDate: string
}

export default function Profile() {
    const [profileData] = useState<ProfileData>({
        name: "CHHAYA DEV",
        role: "SOFTWARE ENGINEERING",
        email: "chhaya.dev@gmail.com",
        phone: "+855 12 333 444",
        address: "Phnom Penh, Cambodia",
        description: "THE DEVELOPER OF CAMBODIA 🇰🇭",
        createdDate: "16 Nov, 2024"
    })


    return (
        <section>

            <div className="w-full mx-auto ">

                <div className=" space-y-2 ">
                    <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">
                        PROFILE
                    </h1>
                    <p className=" text-description-color text-base md:text-lg xl:text-xl">
                        Real-time insights for data-driven decisions
                    </p>
                </div>

                <Card className="w-full border-0 ">
                    <section className=" flex gap-[150px] p-5 ">
                        <section
                            className=" w-auto h-auto cursor-pointer "
                        >
                            <Image
                                unoptimized
                                width={500}
                                height={10}
                                className=" w-[300px] h-auto rounded-[6px] border border-gray-200  p-5 "
                                src="/phanmai.png"
                                alt="Profile Image"
                            />
                        </section>

                        <section
                            className=" relative flex md:flex-row md:gap-6 justify-between items-center w-full border border-gray-200 rounded-[6px] p-5 ">

                            <section className=" flex flex-col gap-3">
                                <div className=" flex ">
                                    <div className=" flex gap-2 items-center min-w-[250px] ">
                                        <PiUserCircleLight className=" text-description-color h-5 w-5 "/>
                                        <p className=" text-description-color text-sm md:text-base xl:text-lg ">Username</p>
                                    </div>
                                    <p className=" text-primary-color-text text-sm md:text-base xl:text-lg ">
                                        {profileData.name}
                                    </p>
                                </div>
                                <div className=" flex ">
                                    <div className=" flex gap-2 items-center min-w-[250px] ">
                                        <TbScanPosition className=" text-description-color h-5 w-5 "/>
                                        <p className=" text-description-color text-sm md:text-base xl:text-lg "> Position</p>
                                    </div>
                                    <p className=" text-primary-color-text text-sm md:text-base xl:text-lg ">
                                        {profileData.role}
                                    </p>
                                </div>
                                <div className=" flex ">
                                    <div className=" flex gap-2 items-center min-w-[250px] ">
                                        <FiPhone className=" text-description-color h-5 w-5 "/>
                                        <p className=" text-description-color text-sm md:text-base xl:text-lg "> Phone
                                            Number</p>
                                    </div>
                                    <p className=" text-primary-color-text text-sm md:text-base xl:text-lg ">
                                        {profileData.phone}
                                    </p>
                                </div>
                                <div className=" flex ">
                                    <div className=" flex gap-2 items-center min-w-[250px] ">
                                        <HiOutlineMail className=" text-description-color h-5 w-5 "/>
                                        <p className=" text-description-color text-sm md:text-base xl:text-lg "> Email</p>
                                    </div>
                                    <p className=" text-primary-color-text text-sm md:text-base xl:text-lg ">
                                        {profileData.email}
                                    </p>
                                </div>
                                <div className=" flex ">
                                    <div className=" flex gap-2 items-center min-w-[250px] ">
                                        <GrLocation className=" text-description-color h-5 w-5 "/>
                                        <p className=" text-description-color text-sm md:text-base xl:text-lg "> Address</p>
                                    </div>
                                    <p className=" text-primary-color-text text-sm md:text-base xl:text-lg ">
                                        {profileData.address}
                                    </p>
                                </div>
                                <div className=" flex ">
                                    <div className=" flex gap-2 items-center min-w-[250px] ">
                                        <SlNote className=" text-description-color h-5 w-5 "/>
                                        <p className=" text-description-color text-sm md:text-base xl:text-lg "> Description</p>
                                    </div>
                                    <p className=" text-primary-color-text text-sm md:text-base xl:text-lg ">
                                        {profileData.description}
                                    </p>
                                </div>
                            </section>

                            <EditProfile  />

                        </section>


                    </section>
                </Card>


            </div>
        </section>
    )
}