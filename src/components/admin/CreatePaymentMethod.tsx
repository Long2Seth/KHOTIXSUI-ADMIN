import React, { useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";

export default function CreatePaymentMethod() {
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
            console.log("Selected file:", file);
        }
    };

    const handleCheckboxChange = (checked: boolean) => {
        setIsCheckboxChecked(checked);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className="text-sm md:text-base xl:text-lg hover:text-secondary-color-text text-secondary-color-text bg-primary-color hover:bg-primary-color/80 rounded-[6px] px-5"
                    variant="outline"
                >
                    Create
                </Button>
            </DialogTrigger>
            <DialogContent
                className="sm:max-w-[30%] bg-khotixs-background-white dark:bg-khotixs-background-dark rounded-[6px] border-0"
            >
                <DialogHeader>
                    <DialogTitle
                        className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text"
                    >
                        NEW PAYMENT
                    </DialogTitle>
                </DialogHeader>
                <Tabs defaultValue="qr">
                    <TabsList className="grid w-full grid-cols-2 ">
                        <TabsTrigger className=" " value="qr">QR</TabsTrigger>
                        <TabsTrigger value="card">CARD</TabsTrigger>
                    </TabsList>
                    <TabsContent value="qr">
                        <div className="border-[1px] border-gray-300 rounded-[6px] p-5">
                            <h1 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-dark-description-color">
                                KHQR
                            </h1>
                            <div className="flex items-center space-x-2 py-4">
                                <Checkbox
                                    className="rounded-[6px] border-primary-color"
                                    id="terms"
                                    checked={isCheckboxChecked}
                                    onCheckedChange={handleCheckboxChange}
                                />
                                <label
                                    htmlFor="terms"
                                    className="text-description-color text-sm md:text-base xl:text-lg"
                                >
                                    Do you want to upload KHQR?
                                </label>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {isCheckboxChecked ? (
                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="upload"
                                            className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                        >
                                            Upload KHQR <span className="text-red-500">*</span>
                                        </label>
                                        <Input
                                            type="file"
                                            id="upload"
                                            ref={fileInputRef}
                                            className="p-2 text-lg border-gray-300 rounded-[6px] dark:border placeholder:text-gray-300 dark:border-white dark:text-secondary-color-text dark:bg-khotixs-background-dark"
                                            onChange={handleImageChange}
                                        />
                                        {imageUrl && (
                                            <Image
                                                unoptimized
                                                width={200}
                                                height={200}
                                                src={imageUrl}
                                                alt="Uploaded KHQR"
                                                className="mt-4 w-full rounded-[6px] border border-gray-300"
                                            />
                                        )}
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex flex-col">
                                            <label
                                                htmlFor="position"
                                                className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text"
                                            >
                                                Currency <span className="text-red-500">*</span>
                                            </label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a currency" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="usd">USA</SelectItem>
                                                    <SelectItem value="riel">RIEL</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="flex flex-col">
                                            <label
                                                htmlFor="name"
                                                className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                            >
                                                Account ID <span className="text-red-500">*</span>
                                            </label>
                                            <Input
                                                type="text"
                                                id="name"
                                                placeholder="Enter Account ID"
                                                className="p-2 text-lg border-gray-300 rounded-[6px] dark:border placeholder:text-gray-300 dark:border-white dark:text-secondary-color-text dark:bg-khotixs-background-dark"
                                            />
                                        </div>
                                    </>
                                )}
                                <Button
                                    className=" text-sm md:text-base xl:text-lg p-2 bg-primary-color text-secondary-color-text hover:text-secondary-color-text hover:bg-primary-color/80 rounded-[6px]"
                                    type="submit"
                                >
                                    Save
                                </Button>
                            </div>
                        </div>
                    </TabsContent>


                    <TabsContent value="card">
                        <div className="border-[1px] border-gray-300 rounded-[6px] p-5">
                            <h1 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-dark-description-color">
                                CREDIT & DEBIT CARD
                            </h1>
                            <div className="flex flex-col py-5 ">
                                <label
                                    htmlFor="name"
                                    className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                >
                                    Stripe Account ID <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    type="text"
                                    id="name"
                                    placeholder="Enter Stripe Account ID "
                                    className="p-2 text-lg border-gray-300 rounded-[6px] dark:border placeholder:text-gray-300 dark:border-white dark:text-secondary-color-text dark:bg-khotixs-background-dark"
                                />
                            </div>
                            <Button
                                className=" w-full text-sm md:text-base xl:text-lg p-2 bg-primary-color text-secondary-color-text hover:text-secondary-color-text hover:bg-primary-color/80 rounded-[6px]"
                                type="submit"
                            >
                                Save
                            </Button>
                        </div>
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    );
}