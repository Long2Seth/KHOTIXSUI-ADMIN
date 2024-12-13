import { LuUser } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { RiCalendarEventLine, RiSecurePaymentLine, RiFolderChartLine, RiBarChartBoxAiLine } from "react-icons/ri";
import { ComponentType } from "react";
import { IconBaseProps } from "react-icons";

type SidebarItem = {
    title: string;
    url: string;
    icon: ComponentType<IconBaseProps & { width?: number; height?: number }>;
};

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