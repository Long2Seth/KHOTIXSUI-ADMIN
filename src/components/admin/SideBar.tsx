'use client';
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
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { SideBarData } from "@/lib/admin/SideBar";

export function SideBar() {
    const [activeItem, setActiveItem] = useState<string>('');
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const currentItem = SideBarData.find(item => item.url === pathname);
        if (currentItem) {
            setActiveItem(currentItem.title);
        }
    }, [pathname]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, title: string, url: string) => {
        e.preventDefault();
        setActiveItem(title);
        router.push(url);
    };

    return (
        <Sidebar className=" h-full" collapsible="icon">
            <div className="flex bg-white dark:bg-khotixs-background-dark items-center justify-center h-20">
                <Image
                    onClick={() => router.push("/")}
                    src="/khotixs_logo.png"
                    alt="App Logo"
                    width={60}
                    height={40}
                />
            </div>
            <SidebarContent className=" h-full bg-white dark:bg-khotixs-background-dark">
                <SidebarGroup className=" h-full ">
                    <SidebarGroupContent>
                        <SidebarMenu className="flex flex-col gap-2">
                            {SideBarData.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a
                                            href={item.url}
                                            className={`flex items-center gap-2 h-[35px] rounded-[6px] ${activeItem === item.title ? 'bg-primary-color text-white' : 'hover:bg-gray-200 hover:text-black dark:hover:bg-white dark:hover:backdrop-blur dark:hover:bg-opacity-10 dark:hover:text-white'}`}
                                            onClick={(e) => handleClick(e, item.title, item.url)}
                                        >
                                            <item.icon/>
                                            <span className="text-base md:text-lg">
                                                {item.title}
                                            </span>
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