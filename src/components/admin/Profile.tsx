'use client'

import Image from "next/image"
import { Camera } from 'lucide-react'
import React, { useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import {
    Dialog,
    DialogContent, DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {router} from "next/client";
import {EventsTable} from "@/components/admin/EventTable";

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
                <h1 className="text-3xl font-bold text-[#4A0635] mb-6">
                    PROFILE
                </h1>
                <Card className="w-full p-6">
                    <div className="flex flex-col md:flex-row md:gap-6 justify-between items-center">
                        {/* Profile Image */}
                        <div className="w-[200px] h-[220px] relative rounded-lg  overflow-hidden">
                            <Image
                                src="/cher-chhaya.png?height=200&width=200"
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="md:hidden">
                            <h2 className="text-2xl font-bold text-[#4A0635]">
                                {profileData.name}
                            </h2>
                            <p className="text-gray-600">{profileData.role}</p>
                        </div>

                        {/* Profile Information */}
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-4">
                                <div className="hidden md:block">
                                    <h2 className="text-2xl font-bold text-[#4A0635]">
                                        {profileData.name}
                                    </h2>
                                    <p className="text-gray-600">{profileData.role}</p>
                                </div>
                                <div className="mt-4 md:mt-0 w-full md:w-auto">

                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button
                                                type="submit"
                                                className="w-full bg-primary-color hover:bg-primary-color dark:text-secondary-color-text"
                                            >
                                                EDIT
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent
                                            className="sm:max-w-[500px] bg-secondary-color-text dark:bg-khotixs-background-dark">
                                            <DialogHeader>
                                                <DialogTitle className="dark:bg-khotixs-background-dark text-2xl">EDIT PROFILE</DialogTitle>
                                                <DialogDescription className="border-[1px]"></DialogDescription>
                                            </DialogHeader>
                                            <form onSubmit={handleSave} className="flex flex-col space-y-2 rounded-[5px]">
                                                <div className="flex items-start space-x-6">
                                                    <div className="relative w-[160px] rounded-lg border-4 border-white shadow-lg">
                                                        <div
                                                            onClick={handleImageClick}
                                                            className="relative cursor-pointer aspect-square overflow-hidden rounded-lg"
                                                        >
                                                            <Image
                                                                src="/cher-chhaya.png"
                                                                alt="Profile"
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                        <button
                                                            onClick={handleImageClick}
                                                            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-gray-50"
                                                            aria-label="Upload new image"
                                                        >
                                                            <Camera className="h-6 w-6 text-gray-600"/>
                                                        </button>
                                                        <input
                                                            ref={fileInputRef}
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={handleImageChange}
                                                            className="hidden"
                                                            aria-label="Image upload input"
                                                        />
                                                    </div>
                                                    <div className="w-[280px] h-[140px] rounded-[5px]">
                                                        <div>
                                                            <Label
                                                                htmlFor="name"
                                                                className="text-sm font-medium text-label-text-description dark:bg-khotixs-background-dark"
                                                            >
                                                                Name <span className="text-label-paid">*</span>
                                                            </Label>
                                                            <Input
                                                                id="name"
                                                                name="name"
                                                                defaultValue="Pedro Duarte"
                                                                className="max-w-[300px] text-label-text-description dark:bg-khotixs-background-dark"
                                                            />
                                                        </div>
                                                        <div className="text-label-text-description py-4">
                                                            <Label
                                                                htmlFor="username"
                                                                className="text-sm font-medium dark:bg-khotixs-background-dark"
                                                            >
                                                                Username <span className="text-label-paid">*</span>
                                                            </Label>
                                                            <Input
                                                                id="username"
                                                                name="username"
                                                                defaultValue="@peduarte"
                                                                className="max-w-[280px] dark:bg-khotixs-background-dark"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-label-text-description">
                                                    <div className="items-center py-4">
                                                        <Label
                                                            htmlFor="location"
                                                            className="text-right dark:bg-khotixs-background-dark"
                                                        >
                                                            Location <span className="text-label-paid">*</span>
                                                        </Label>
                                                        <Input
                                                            id="location"
                                                            name="location"
                                                            value="Pedro Duarte"
                                                            className="focus:outline-none col-span-3 dark:bg-khotixs-background-dark"
                                                        />
                                                    </div>
                                                    <div className="gap-4">
                                                        <Label
                                                            htmlFor="description"
                                                            className="text-right dark:bg-khotixs-background-dark"
                                                        >
                                                            Description <span className="text-label-paid">*</span>
                                                        </Label>
                                                        <Input
                                                            id="description"
                                                            name="description"
                                                            value="THE DEVELOPER OF CAMBODIA 🇰🇭"
                                                            className="w-full h-[120px] dark:bg-khotixs-background-dark"
                                                        />
                                                    </div>
                                                </div>
                                                <section>
                                                    <div className="flex gap-4 pt-4">
                                                        <Button
                                                            className="w-full bg-white hover:bg-slate-200 dark:text-secondary-color-text dark:bg-khotixs-background-dark text-primary-color-text border-solid border-[1px]"
                                                            onClick={() => router.back()}
                                                        >
                                                            Cancel
                                                        </Button>
                                                        <Button
                                                            type="submit"
                                                            className="w-full bg-primary-color hover:bg-primary-color dark:text-secondary-color-text"
                                                        >
                                                            Save
                                                        </Button>
                                                    </div>
                                                </section>
                                            </form>
                                        </DialogContent>

                                    </Dialog>

                                </div>
                            </div>

                            {/* Contact Details Grid */}
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <p className="text-gray-500 text-sm">Email</p>
                                    <p>{profileData.email}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Address</p>
                                    <p>{profileData.address}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Phone Number</p>
                                    <p>{profileData.phone}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Created Date</p>
                                    <p>{profileData.createdDate}</p>
                                </div>
                                <div className="col-span-2">
                                    <p className="text-gray-500 text-sm">Description</p>
                                    <p>{profileData.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>

            </div>
        </div>
    )
}