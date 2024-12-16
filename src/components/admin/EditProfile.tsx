import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import Image from "next/image";
import {CiCamera} from "react-icons/ci";
import React, {useRef} from "react";

export default function EditProfile() {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Handle the file upload logic here
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className="absolute top-[20px] border-0 right-[20px] hover:text-secondary-color-text text-secondary-color-text bg-primary-color hover:bg-primary-color/80 rounded-[6px] px-5 "
                    variant="outline">Edit</Button>
            </DialogTrigger>
            <DialogContent
                className="sm:max-w-[40%] border-0 bg-khotixs-background-white dark:bg-khotixs-background-dark rounded-[6px] ">
                <DialogHeader>
                    <DialogTitle
                        className=" text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text ">Edit
                        Profile</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 gap-4 py-4">

                    <div className=" flex gap-4 ">
                        <section
                            className="w-auto h-auto cursor-pointer"
                            onClick={handleImageClick}>
                            <Image
                                unoptimized
                                width={500}
                                height={10}
                                className="w-[200px] h-auto rounded-[6px] border border-gray-200 p-5"
                                src="/phanmai.png"
                                alt="Profile Image"
                            />
                            <div className="-mt-[15px] w-full flex justify-center">
                                <div className="rounded-full w-8 h-8 bg-white items-center flex justify-center">
                                    <CiCamera className="h-5 w-5 text-gray-200"/>
                                </div>
                            </div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{display: 'none'}}
                                onChange={handleImageChange}
                            />
                        </section>

                        <div className=" w-full space-y-4 ">
                            <div className="flex flex-col">
                                <label
                                    htmlFor="name"
                                    className="text-base font-medium text-primary-color-text dark:text-secondary-color-text">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                    className="p-2 text-lg border-gray-300 rounded-[6px] dark:border placeholder:text-gray-300 dark:border-white dark:text-secondary-color-text dark:bg-khotixs-background-dark"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="position"
                                       className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                                    Position <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    type="text"
                                    id="position"
                                    placeholder="Position"
                                    className="p-2 text-lg border-gray-300 rounded-[6px] dark:border placeholder:text-gray-300 dark:border-white dark:text-secondary-color-text dark:bg-khotixs-background-dark"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="name"
                            className="text-base font-medium text-primary-color-text dark:text-secondary-color-text">
                            Location
                        </label>
                        <Input
                            type="text"
                            id="name"
                            placeholder="Phnom Penh, Cambodia"
                            className="p-2 text-lg border-gray-300 rounded-[6px] dark:border placeholder:text-gray-300 dark:border-white dark:text-secondary-color-text dark:bg-khotixs-background-dark"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="message"
                            className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                            Description

                        </label>
                        <textarea
                            id="message"
                            placeholder="ក្តីស្រមៃដែលគ្រប់គ្នាៗចង់ឲកើតមានឡើង ក្តីស្រមៃនោះបានក្លាយ ជាការពិតហើយ! STING MUSICVERSE សូមនាំយក​ ការប្រគុំតន្រ្តី THE Q RISE OF THE QUEEN – AOK SOKUNKANHA "
                            className="p-2 text-lg border bg-khotixs-background-white focus:outline-none border-gray-300 rounded-[6px] dark:border placeholder:text-gray-300 dark:border-white dark:text-secondary-color-text dark:bg-khotixs-background-dark"
                        >

                            </textarea>
                    </div>

                </div>
                <DialogFooter>
                    <Button
                        className=" bg-primary-color text-secondary-color-text hover:text-secondary-color-text hover:bg-primary-color/80 rounded-[6px] "
                        type="submit">Update</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}