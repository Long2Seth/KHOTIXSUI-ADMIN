import {
    LogOut,
    User,
} from "lucide-react"
import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    // DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import * as React from "react";
import {useRouter} from "next/navigation";
import {UserProfileType} from "@/lib/admin/UserData";
import {useLogoutMutation} from "@/redux/feature/user/UserProfile";

type UserProfileProps = {
    data: UserProfileType
};

export function UserProfileComponent({data}: UserProfileProps) {
    const router = useRouter();
    const [logout] = useLogoutMutation();

    const handleLogout = async () => {
        try {
            await logout().unwrap();
            router.push("/");
        } catch (error) {
            console.error("Failed to logout:", error);
            router.push("/");
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={` mr-[35px] sm:mr-20 md:mr-0 `} asChild>
                <Button variant="ghost" className="p-0 rounded-full">
                    <div className="flex flex-col items-center gap-4">
                        <Avatar className="w-[40px] h-[40px] rounded-[5px]">
                            <AvatarImage src={data.avatar}/>
                        </Avatar>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-auto rounded-[6px] bg-white dark:border dark:border-gray-400 dark:bg-khotixs-background-dark border-0">
                {/*<DropdownMenuSeparator/>*/}
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => router.push(`/profile/info-detail`)}>
                        <User/>
                        <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleLogout()}>
                        <LogOut className=" text-label-paid hover:text-label-paid/80"/>
                        <span className=" text-label-paid hover:text-label-paid/80">Log out</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}