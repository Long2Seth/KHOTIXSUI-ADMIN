import SidebarTriggerComponent from "@/components/admin/SidebarTriggerComponent";
import {ModeToggle} from "@/components/ui/modeToggle";
import Image from "next/image";
import {NotificationComponent} from "@/components/admin/NotificationComponent";
import {Button} from "@/components/ui/button";


export default function NavBar() {
    return (
        <nav className=" bg-white dark:bg-khotixs-background-dark w-full items-center flex justify-between pr-10 py-[15px] dark:shadow-white ">
            <SidebarTriggerComponent/>
            <div className=" flex items-center gap-3 ">
                <ModeToggle/>
                <NotificationComponent/>
                <Image
                    className=" rounded-[6px] "
                    width={45}
                    height={45}
                    src="/phanmai.png"
                    alt="profile-user"
                    unoptimized />
                <Button className=" p-5 text-sm md:text-base xl:text-lg bg-white border border-primary-color text-primary-color rounded-[6px] ">
                    Event Organizer
                </Button>

            </div>
        </nav>
    )
}