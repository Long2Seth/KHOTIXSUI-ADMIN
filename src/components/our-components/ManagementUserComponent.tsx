import {Card} from "@/components/ui/card";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import UserDetailPaymentTable from "@/components/our-components/payment/UserDetailPaymentTable";

export default function ManagementUserComponent() {
    return (
        <section className=" w-full ">
            <section className=" w-full flex gap-5">
                <Card className=" w-[30%] bg-white border-0  py-10 rounded-[6px] space-y-5 ">
                    <section className=" w-full flex flex-col justify-center items-center text-center space-y-2 ">
                        <Image
                            className=" rounded-[6px] "
                            width={200}
                            height={100}
                            src="/phanmai.png"
                            alt="user-image"/>
                        <h1 className=" w-full text-title-color text-lg md:text-2xl xl:text-4xl font-light dark:text-secondary-color-text ">Phal
                            Sophanmai </h1>
                        <h4 className=" text-description-color text-base md:text-lg xl:text-xl ">
                            email123456@gmail.com
                        </h4>
                    </section>
                    <section className="relative flex w-full justify-center gap-40 ">
                        <div>
                            <h1 className=" w-full text-title-color text-lg md:text-2xl xl:text-4xl font-light dark:text-secondary-color-text my-2 ">
                                Order
                            </h1>
                            <p className=" text-description-color text-base md:text-lg xl:text-xl ">
                                51
                            </p>
                        </div>
                        <hr className="absolute left-[190px] top-[40px] w-[80px] border-[1px] rotate-90"/>
                        <div>
                            <h1 className=" w-full text-title-color text-lg md:text-2xl xl:text-4xl font-light dark:text-secondary-color-text my-2 ">
                                Role
                            </h1>
                            <p className=" text-description-color text-base md:text-lg xl:text-xl ">
                                User
                            </p>
                        </div>

                    </section>
                    <section className=" w-full flex justify-center">
                        <Button
                            className="mx-auto w-[350px] h-[50px] bg-primary-color text-secondary-color-text rounded-[6px] text-base md:text-lg xl:text-xl ">
                            Set role
                        </Button>
                    </section>


                </Card>
                <Card className=" w-[70%] bg-white border-0 grid grid-cols-3 p-10 ">
                    <section>
                        <p className=" text-description-color text-base md:text-lg xl:text-xl ">
                            Username
                        </p>
                        <h1 className=" w-full text-title-color text-lg md:text-2xl font-semibold dark:text-secondary-color-text my-2 ">
                            Phal Sophanmai
                        </h1>
                    </section>

                    <section>
                        <p className=" text-description-color text-base md:text-lg xl:text-xl ">
                            Birthday
                        </p>
                         <h1
                        className=" w-full text-title-color text-lg md:text-2xl font-semibold dark:text-secondary-color-text my-2 ">
                        Feb 24th, 1997
                    </h1>
                    </section>

                    <section>
                        <p className=" text-description-color text-base md:text-lg xl:text-xl ">
                            Phone Number
                        </p>
                        <h1 className=" w-full text-title-color text-lg md:text-2xl font-semibold dark:text-secondary-color-text my-2 ">
                            (239) 555-0108
                        </h1>
                    </section>

                    <section>
                        <p className=" text-description-color text-base md:text-lg xl:text-xl ">
                            Street Address
                        </p>
                        <h1 className=" w-full text-title-color text-lg md:text-2xl font-semibold dark:text-secondary-color-text my-2 ">
                            st 2011, sensok
                        </h1>
                    </section>

                    <section>
                        <p className=" text-description-color text-base md:text-lg xl:text-xl ">
                            City
                        </p>
                        <h1 className=" w-full text-title-color text-lg md:text-2xl font-semibold dark:text-secondary-color-text my-2 ">
                           Phnom Penh
                        </h1>
                    </section>

                    <section>
                        <p className=" text-description-color text-base md:text-lg xl:text-xl ">
                            ZIP Code
                        </p>
                        <h1 className=" w-full text-title-color text-lg md:text-2xl font-semibold dark:text-secondary-color-text my-2 ">
                            12101
                        </h1>
                    </section>

                    <section>
                        <p className=" text-description-color text-base md:text-lg xl:text-xl ">
                            Member Status
                        </p>
                        <h1 className=" w-full text-title-color text-lg md:text-2xl font-semibold dark:text-secondary-color-text my-2 ">
                            Disable
                        </h1>
                    </section>

                    <section>
                        <p className=" text-description-color text-base md:text-lg xl:text-xl ">
                            Registered Date
                        </p>
                        <h1 className=" w-full text-title-color text-lg md:text-2xl font-semibold dark:text-secondary-color-text my-2 ">
                            Feb 24th, 1997
                        </h1>
                    </section>


                </Card>
            </section>
            <UserDetailPaymentTable/>
        </section>
    );
}