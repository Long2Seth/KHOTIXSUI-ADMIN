import {Card} from "@/components/ui/card";
import {FiUser} from "react-icons/fi";
import {LuUsers} from "react-icons/lu";
import {RiCalendarEventLine, RiFolderChartLine, RiSecurePaymentLine} from "react-icons/ri";
import {IoIosNotificationsOutline} from "react-icons/io";

export default function CardInfoDashboard() {
    return (
        <section className="grid lg:grid-cols-3 2xl:grid-cols-6 gap-5 w-full">

            <Card className=" h-[200px] w-full bg-white dark:bg-khotixs-background-dark pl-[40px] flex flex-col gap-5 justify-center rounded-[6px]">
                <FiUser className=" h-10 w-10 text-gray-400"/>

                <section className=" flex flex-col gap-1">
                    <h1 className=" text-primary-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text ">1055</h1>
                    <p className="text-gray-400 text-sm md:text-base xl:text-lg uppercase  ">USERS</p>
                </section>

            </Card>


            <Card className=" h-[200px] w-full bg-white dark:bg-khotixs-background-dark pl-[40px] flex flex-col gap-5 justify-center rounded-[6px]">
                <LuUsers className=" h-10 w-10 text-gray-400"/>

                <section className=" flex flex-col gap-1">
                    <h1 className=" text-primary-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text ">255</h1>
                    <p className="text-gray-400 text-sm md:text-base xl:text-lg uppercase  ">ORGANIZERS</p>
                </section>

            </Card>


            <Card className=" h-[200px] w-full bg-white dark:bg-khotixs-background-dark pl-[40px] flex flex-col gap-5 justify-center rounded-[6px]">
                <RiCalendarEventLine className=" h-10 w-10 text-gray-400"/>

                <section className=" flex flex-col gap-1">
                    <h1 className=" text-primary-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text ">105</h1>
                    <p className="text-gray-400 text-sm md:text-base xl:text-lg uppercase  ">EVENTS</p>
                </section>

            </Card>


            <Card className=" h-[200px] w-full bg-white dark:bg-khotixs-background-dark pl-[40px] flex flex-col gap-5 justify-center rounded-[6px]">
                <RiSecurePaymentLine className=" h-10 w-10 text-gray-400"/>

                <section className=" flex flex-col gap-1">
                    <h1 className=" text-primary-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text ">$25500.32</h1>
                    <p className="text-gray-400 text-sm md:text-base xl:text-lg uppercase  ">TOTAL PAYMENTS</p>
                </section>

            </Card>


            <Card className=" h-[200px] w-full bg-white dark:bg-khotixs-background-dark pl-[40px] flex flex-col gap-5 justify-center rounded-[6px]">
                <RiFolderChartLine className=" h-10 w-10 text-gray-400"/>

                <section className=" flex flex-col gap-1">
                    <h1 className=" text-primary-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text ">55</h1>
                    <p className="text-gray-400 text-sm md:text-base xl:text-lg uppercase  ">ORDERS</p>
                </section>

            </Card>


            <Card className=" h-[200px] w-full bg-white dark:bg-khotixs-background-dark pl-[40px] flex flex-col gap-5 justify-center rounded-[6px]">
                <IoIosNotificationsOutline className=" h-10 w-10 text-gray-400"/>

                <section className=" flex flex-col gap-1">
                    <h1 className=" text-primary-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text ">30000</h1>
                    <p className="text-gray-400 text-sm md:text-base xl:text-lg uppercase  ">NOTIFICATIONS</p>
                </section>

            </Card>


        </section>
    )
}