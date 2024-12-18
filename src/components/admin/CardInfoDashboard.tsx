import { Card } from "@/components/ui/card";
import { FiUser } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { RiCalendarEventLine, RiFolderChartLine, RiSecurePaymentLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";

const cardData = [
    {
        icon: <FiUser className="h-10 w-10 text-gray-400" />,
        value: "1055",
        label: "USERS",
    },
    {
        icon: <LuUsers className="h-10 w-10 text-gray-400" />,
        value: "255",
        label: "ORGANIZERS",
    },
    {
        icon: <RiCalendarEventLine className="h-10 w-10 text-gray-400" />,
        value: "105",
        label: "EVENTS",
    },
    {
        icon: <RiSecurePaymentLine className="h-10 w-10 text-gray-400" />,
        value: "$250.32",
        label: "TOTAL PAYMENTS",
    },
    {
        icon: <RiFolderChartLine className="h-10 w-10 text-gray-400" />,
        value: "55",
        label: "ORDERS",
    },
    {
        icon: <IoIosNotificationsOutline className="h-10 w-10 text-gray-400" />,
        value: "3000",
        label: "NOTIFICATIONS",
    },
];

export default function CardInfoDashboard() {
    return (
        <section className="grid lg:grid-cols-3 2xl:grid-cols-6 gap-5 w-full">
            {cardData.map((card, index) => (
                <Card key={index} className="h-[170px] w-full bg-white dark:bg-khotixs-background-dark pl-[40px] flex flex-col gap-5 justify-center rounded-[6px]">
                    {card.icon}
                    <section className="flex flex-col gap-1">
                        <h1 className="text-primary-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">{card.value}</h1>
                        <p className="text-gray-400 text-sm md:text-base xl:text-lg uppercase">{card.label}</p>
                    </section>
                </Card>
            ))}
        </section>
    );
}