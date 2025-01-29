'use client';
import SidebarTriggerComponent from "@/components/our-components/navbar/SidebarTriggerComponent";
import {ModeToggle} from "@/components/ui/modeToggle";
import {NotificationComponent} from "@/components/our-components/notification/NotificationComponent";
import {Button} from "@/components/ui/button";
import {useGetUserProfileQuery} from "@/redux/feature/user/UserProfile";
import {UserProfileComponent} from "@/components/our-components/info-user/UserProfileComponent";

export default function NavBar() {
    const {data: userProfile, error, isLoading} = useGetUserProfileQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading user profile</div>;

    return (
        <nav
            className=" bg-white dark:bg-khotixs-background-dark w-full items-center flex justify-between pr-10 py-[15px] dark:shadow-white ">
            <SidebarTriggerComponent/>
            <div className=" flex items-center gap-3 ">
                <ModeToggle/>
                <NotificationComponent/>
                {userProfile && <UserProfileComponent data={userProfile}/>}
                <Button
                    className=" p-5 text-sm md:text-base xl:text-lg bg-white border border-primary-color text-primary-color rounded-[6px] dark:bg-khotixs-background-dark hover:bg-primary-color hover:text-white dark:hover:bg-primary-color">
                    Event Organizer
                </Button>
            </div>
        </nav>
    )
}