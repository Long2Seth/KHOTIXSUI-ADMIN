'use client'

import React, {useState, useRef} from "react"
import {Card} from "@/components/ui/card"
import {PiUserCircleLight} from "react-icons/pi";
import {TbScanPosition} from "react-icons/tb";
import {FiPhone} from "react-icons/fi";
import {HiOutlineMail} from "react-icons/hi";
import {GrLocation} from "react-icons/gr";
import {SlNote} from "react-icons/sl";
import Image from "next/image";
import {CiCamera} from "react-icons/ci";

interface ProfileData {
    name: string
    role: string
    email: string
    phone: string
    address: string
    description: string
    createdDate: string
}

export default function Profile() {
    const [profileData, setProfileData] = useState<ProfileData>({
        name: "CHHAYA DEV",
        role: "SOFTWARE ENGINEERING",
        email: "chhaya.dev@gmail.com",
        phone: "+855 12 333 444",
        address: "Phnom Penh, Cambodia",
        description: "THE DEVELOPER OF CAMBODIA 🇰🇭",
        createdDate: "16 Nov, 2024"
    })

    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        setProfileData({
            name: formData.get('name') as string,
            role: formData.get('role') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            address: formData.get('address') as string,
            description: formData.get('description') as string,
            createdDate: profileData.createdDate // Preserve the original date
        })
    }

    const handleImageClick = () => {
        fileInputRef.current?.click()
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            // Handle the file upload logic here
        }
    }

    return (
        <section className=" p-10 ">

            <div className="w-full mx-auto space-y-5 ">

                <div className=" space-y-2 ">
                    <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">
                        PROFILE
                    </h1>
                    <p className=" text-description-color text-base md:text-lg xl:text-xl">
                        Real-time insights for data-driven decisions
                    </p>
                </div>

                <Card className="w-full border-0 ">
                    <section className=" flex gap-[150px]">
                        <section className=" relative w-auto h-auto">
                            <Image
                                unoptimized
                                width={100}
                                height={100}
                                className=" w-[150px] h-[150px] rounded-[6px] border border-gray-200  p-4 "
                                src="/khotixs-logo.png"
                                alt="Profile Image"
                            />
                            <div
                                className="absolute bottom-[80px] right-[50px] cursor-pointer rounded-full w-8 h-8 bg-white items-center flex justify-center"
                                onClick={handleImageClick}
                            >
                                <CiCamera className=" h-5 w-5 text-gray-200  "/>
                            </div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{display: 'none'}}
                                onChange={handleImageChange}
                            />
                        </section>

                        <div
                            className="flex md:flex-row md:gap-6 justify-between items-center w-full border border-gray-200 rounded-[6px] p-5 ">

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

                        </div>


                    </section>
                </Card>

            </div>
        </section>
    )
}