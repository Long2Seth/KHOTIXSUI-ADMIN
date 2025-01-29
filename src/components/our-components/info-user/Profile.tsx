'use client'

import React from "react"
import {Card} from "@/components/ui/card"
import {PiUserCircleLight} from "react-icons/pi";
import {TbScanPosition} from "react-icons/tb";
import {FiPhone} from "react-icons/fi";
import {HiOutlineMail} from "react-icons/hi";
import {GrLocation} from "react-icons/gr";
import {SlNote} from "react-icons/sl";
import Image from "next/image";
import EditProfile from "@/components/our-components/info-user/EditProfile";
import {useGetUserProfileQuery} from "@/redux/feature/user/UserProfile";

export default function Profile() {
    const { data: userProfile, error, isLoading } = useGetUserProfileQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading user profile</div>;

    return (
        <section>
            <div className="w-full mx-auto ">
                <div className=" space-y-2 ">
                    <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">
                        PROFILE
                    </h1>
                    <p className=" text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">
                        Real-time insights for data-driven decisions
                    </p>
                </div>

                <Card className="w-full border-0 shadow-none bg-white dark:bg-khotixs-background-dark ">
                    <section className=" flex gap-[150px] p-5 ">
                        <section className=" w-auto h-auto cursor-pointer ">
                            <Image
                                unoptimized
                                width={500}
                                height={10}
                                className=" w-[300px] h-auto rounded-[6px] border border-gray-200  p-5 "
                                src={userProfile?.avatar || "/default-avatar.png"}
                                alt="Profile Image"
                            />
                        </section>

                        <section className="  flex md:flex-row md:gap-6 justify-between items-start w-full border border-gray-200 rounded-[6px] p-5 ">
                            <section className=" flex flex-col gap-3">
                                <div className=" flex ">
                                    <div className=" flex gap-2 items-center min-w-[250px] ">
                                        <PiUserCircleLight className=" text-description-color h-5 w-5 dark:text-gray-400 "/>
                                        <p className=" text-description-color text-sm md:text-base xl:text-lg dark:text-gray-400 ">Username</p>
                                    </div>
                                    <p className=" text-primary-color-text text-sm md:text-base xl:text-lg dark:text-dark-description-color ">
                                        {userProfile?.fullName}
                                    </p>
                                </div>
                                <div className=" flex ">
                                    <div className=" flex gap-2 items-center min-w-[250px] ">
                                        <TbScanPosition className=" text-description-color h-5 w-5 dark:text-gray-400 "/>
                                        <p className=" text-description-color text-sm md:text-base xl:text-lg dark:text-gray-400 "> Position</p>
                                    </div>
                                    <p className=" text-primary-color-text text-sm md:text-base xl:text-lg dark:text-dark-description-color">
                                        {userProfile?.position}
                                    </p>
                                </div>
                                <div className=" flex ">
                                    <div className=" flex gap-2 items-center min-w-[250px] ">
                                        <FiPhone className=" text-description-color h-5 w-5 dark:text-gray-400 "/>
                                        <p className=" text-description-color text-sm md:text-base xl:text-lg dark:text-gray-400 "> Phone Number</p>
                                    </div>
                                    <p className=" text-primary-color-text text-sm md:text-base xl:text-lg dark:text-dark-description-color">
                                        {userProfile?.phoneNumber}
                                    </p>
                                </div>
                                <div className=" flex ">
                                    <div className=" flex gap-2 items-center min-w-[250px] ">
                                        <HiOutlineMail className=" text-description-color h-5 w-5 dark:text-gray-400 "/>
                                        <p className=" text-description-color text-sm md:text-base xl:text-lg dark:text-gray-400 "> Email</p>
                                    </div>
                                    <p className=" text-primary-color-text text-sm md:text-base xl:text-lg dark:text-dark-description-color">
                                        {userProfile?.email}
                                    </p>
                                </div>
                                <div className=" flex ">
                                    <div className=" flex gap-2 items-center min-w-[250px] ">
                                        <GrLocation className=" text-description-color h-5 w-5 dark:text-gray-400 "/>
                                        <p className=" text-description-color text-sm md:text-base xl:text-lg dark:text-gray-400 "> Address</p>
                                    </div>
                                    <p className=" text-primary-color-text text-sm md:text-base xl:text-lg dark:text-dark-description-color">
                                        {userProfile?.address}
                                    </p>
                                </div>
                                <div className=" flex ">
                                    <div className=" flex gap-2 items-center min-w-[250px] ">
                                        <SlNote className=" text-description-color h-5 w-5 dark:text-gray-400 "/>
                                        <p className=" text-description-color text-sm md:text-base xl:text-lg dark:text-gray-400 "> Description</p>
                                    </div>
                                    <p className=" text-primary-color-text text-sm md:text-base xl:text-lg dark:text-dark-description-color">
                                        {userProfile?.businessName}
                                    </p>
                                </div>
                            </section>

                            {userProfile && <EditProfile profile={userProfile} />}
                        </section>
                    </section>
                </Card>
            </div>
        </section>
    )
}