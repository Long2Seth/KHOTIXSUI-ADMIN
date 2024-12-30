import Image from "next/image";
import {Card} from "@/components/ui/card";
import {IoMdMore} from "react-icons/io";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";


type ProfileData = {
    image: string;
    name: string;
    type: string;
    remark: string;
}

type CardPaymentProps = {
    profileData: ProfileData;
}

export default function CardPayment({profileData}: CardPaymentProps) {
    return (
        <Card className="w-full border-0">
            <section className="flex justify-between sm:items-center p-5 border border-gray-300 rounded-[6px] bg-white hover:bg-khotixs-background-white dark:hover:bg-khotixs-background-dark">

                <section className=" flex flex-col md:flex-row gap-5 sm:gap-5 md:gap-10 ">
                    <section className="h-auto">
                        <Image
                            unoptimized
                            width={200}
                            height={10}
                            className="w-[120px] h-auto rounded-[6px] border-2 border-gray-200"
                            src={profileData.image}
                            alt="Profile Image"
                        />
                    </section>

                    <section>
                        <section className="flex flex-col gap-3">
                            <div className="flex">
                                <p className="min-w-[135px] text-gray-500 text-sm md:text-base xl:text-lg font-semibold">Payment
                                    Name</p>
                                <p className="font-semibold text-gray-500 min-w-[35px]">:</p>
                                <p className="text-gray-500 text-sm md:text-base xl:text-lg">
                                    {profileData.name}
                                </p>
                            </div>
                            <div className="flex">
                                <p className="min-w-[135px] text-gray-500 text-sm md:text-base xl:text-lg font-semibold">Payment
                                    Type</p>
                                <p className="font-semibold text-gray-500 min-w-[35px]">:</p>
                                <p className="text-gray-500 text-sm md:text-base xl:text-lg">
                                    {profileData.type}
                                </p>
                            </div>
                            <div className="flex">
                                <p className="min-w-[135px] text-gray-500 text-sm md:text-base xl:text-lg font-semibold">Remark</p>
                                <p className="font-semibold text-gray-500 min-w-[35px]">:</p>
                                <p className="text-gray-500 text-sm md:text-base xl:text-lg">
                                    {profileData.remark}
                                </p>
                            </div>
                        </section>


                    </section>
                </section>

                <section>
                    <Popover>
                        <PopoverTrigger>
                            <IoMdMore className=" w-7 h-7 text-gray-500"/>
                        </PopoverTrigger>
                        <PopoverContent className=" w-[100px] p-1 ">
                            <div className=" flex flex-col space-y-2 ">
                                <button
                                    className="w-full text-left text-gray-500 text-sm md:text-base xl:text-lg hover:text-primary-color-text hover:bg-gray-100 rounded-[6px] pl-5 "
                                >
                                    Edit
                                </button>
                                <button
                                    className="w-full text-left text-red-500 text-sm md:text-base xl:text-lg hover:bg-gray-200 hover:text-red-700 pl-5 rounded-[6px] "
                                >
                                    Delete
                                </button>
                            </div>
                        </PopoverContent>

                    </Popover>
                </section>

            </section>
        </Card>
    )
}