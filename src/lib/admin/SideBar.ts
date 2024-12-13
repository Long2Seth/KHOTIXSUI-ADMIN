import { LuUser } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { RiCalendarEventLine } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";
import { RiFolderChartLine } from "react-icons/ri";
import { RiBarChartBoxAiLine } from "react-icons/ri";
import { ComponentType } from "react";

type SidebarItem = {
    title: string;
    url: string;
    icon: ComponentType;
};

// Menu items.
export const SideBarData: SidebarItem[] = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: RiBarChartBoxAiLine,
    },
    {
        title: "User",
        url: "/user",
        icon: LuUser,
    },
    {
        title: "Organizer",
        url: "/organizer",
        icon: FiUsers,
    },
    {
        title: "Event",
        url: "/event",
        icon: RiCalendarEventLine,
    },
    {
        title: "Payment",
        url: "/payment",
        icon: RiSecurePaymentLine,
    },
    {
        title: "Order Data",
        url: "/order",
        icon: RiFolderChartLine,
    },
];