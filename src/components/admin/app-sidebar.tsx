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

export function AppSidebar() {
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
        <Sidebar collapsible="icon">
            <div className="flex bg-white dark:bg-khotixs-background-dark items-center justify-center h-16">
                <Image
                    onClick={() => router.push("/")}
                    src="/khotixs-logo.png"
                    alt="App Logo"
                    width={40}
                    height={40}
                />
            </div>
            <SidebarContent className="bg-white dark:bg-khotixs-background-dark">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="flex flex-col gap-2">
                            {SideBarData.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a
                                            href={item.url}
                                            className={`flex items-center gap-2 h-[35px] rounded-[6px] ${activeItem === item.title ? 'bg-primary-color text-white' : 'hover:bg-secondary-color hover:text-white'}`}
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