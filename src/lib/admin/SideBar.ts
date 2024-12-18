import { LuUser } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { PiIdentificationCardThin } from "react-icons/pi";
import { RiCalendarEventLine, RiSecurePaymentLine, RiFolderChartLine, RiBarChartBoxAiLine } from "react-icons/ri";


export const SideBarData = [
    {
        title: "Dashboard",
        url: "/",
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
    {
        title: "Payment Method",
        url: "/payment-method",
        icon: PiIdentificationCardThin,
    },
];