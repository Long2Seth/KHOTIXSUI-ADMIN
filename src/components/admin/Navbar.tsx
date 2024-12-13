import SidebarTriggerComponent from "@/components/admin/SidebarTriggerComponent";
import {ModeToggle} from "@/components/ui/modeToggle";
import {IoMdNotificationsOutline} from "react-icons/io";
import Image from "next/image";


export default function NavBar() {
    return (
        <nav className=" bg-white w-full h-[60px] items-center flex justify-between pr-10">
            <SidebarTriggerComponent/>
            <div className=" flex items-center gap-2">
                <ModeToggle/>
                <IoMdNotificationsOutline className=" h-10 w-5  "/>
                <Image
                    className=" rounded-[6px] "
                    width={50}
                    height={50}
                    src="/phanmai.png"
                    alt="profile-user"
                    unoptimized />

            </div>
        </nav>
    )
}