'use client'

import React, {useState, useRef} from "react"
import {Card} from "@/components/ui/card"
import { PiUserCircleLight } from "react-icons/pi";
import { TbScanPosition } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { SlNote } from "react-icons/sl";


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
        <div className="min-h-screen p-4">
            <div className="w-full max-w-[1200px] mx-auto">
                <h1 className="text-3xl font-bold text-[#4A0635]">
                    PROFILE
                </h1>
                <p>
                    Real-time insights for data-driven decisions
                </p>
                <Card className="w-full border-0 ">
                    <section className=" flex gap-[100px]">
                        <img
                            className=" w-[150px] h-[150px] rounded-[6px]"
                            src="/khotixs-logo.png"
                        />

                        <div className="flex md:flex-row md:gap-6 justify-between items-center w-full">
                            {/* Profile Image */}

                            <section className=" flex flex-col gap-3">
                                <div className=" flex ">
                                    <div className=" flex gap-2 items-center min-w-[200px] ">
                                        <PiUserCircleLight className=" h-5 w-5 "/>
                                        <p> Username</p>
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#4A0635]">
                                        {profileData.name}
                                    </h2>
                                </div>
                                <div className=" flex ">
                                    <div className=" flex gap-2 items-center min-w-[200px] ">
                                        <TbScanPosition/>
                                        <p> Position</p>
                                    </div>
                                    <p className="text-gray-600">{profileData.role}</p>
                                </div>
                                <div className=" flex ">
                                    <div className=" flex gap-2 items-center min-w-[200px] ">
                                        <FiPhone/>
                                        <p> Phone Number</p>
                                    </div>
                                    <p>{profileData.phone}</p>
                                </div>
                                <div className=" flex ">
                                    <div className=" flex gap-2 items-center min-w-[200px] ">
                                        <HiOutlineMail/>
                                        <p> Email</p>
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#4A0635]">
                                        {profileData.email}
                                    </h2>
                                </div>
                                <div className=" flex ">
                                    <div className=" flex gap-2 items-center min-w-[200px] ">
                                        <GrLocation/>
                                        <p> Address</p>
                                    </div>
                                    <p className="text-gray-600">{profileData.address}</p>
                                </div>
                                <div className=" flex ">
                                    <div className=" flex gap-2 items-center min-w-[200px] ">
                                        <SlNote/>
                                        <p> Description</p>
                                    </div>
                                    <p>{profileData.description}</p>
                                </div>
                            </section>

                        </div>
                    </section>
                </Card>

            </div>
        </div>
    )
}