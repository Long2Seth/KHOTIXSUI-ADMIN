import Image from "next/image";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import {SideBarData} from "@/lib/admin/SideBar";

export function AppSidebar() {

    return (
        <Sidebar collapsible="icon">
            <div className="flex bg-white items-center justify-center h-16">
                <Image
                    src="/khotixs-logo.png"
                    alt="App Logo"
                    width={40}
                    height={40}
                    className=""
                />
            </div>
            <SidebarContent className=" bg-white ">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className=" flex flex-col gap-2 ">
                            {SideBarData.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url} className="flex items-center gap-2 h-[50px] hover:bg-primary-color hover:text-white rounded-[8px] ">
                                            <item.icon height={20} width={20}/>
                                            <span className=" text-base md:text-lg xl:text-xl ">{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
