import type {Metadata} from "next";
import "../globals.css";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/admin/app-sidebar";
import {cookies} from "next/headers"
import {ModeToggle} from "@/components/ui/modeToggle";
import {IoMdNotificationsOutline} from "react-icons/io";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = cookies()
    const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"
    return (
        <html lang="en">
        <body className={""}>
        <SidebarProvider defaultOpen={defaultOpen}>

            <AppSidebar/>
            <main className=" w-full flex flex-col justify-between ">
                <section className=" h-auto bg-blue-600 sticky top-0 z-[100]">
                    <ModeToggle />
                    <SidebarTrigger/>
                    <IoMdNotificationsOutline  className=" bg-label-free "/>
                </section>
                {children}

            </main>

        </SidebarProvider>
        </body>
        </html>
    );
}
