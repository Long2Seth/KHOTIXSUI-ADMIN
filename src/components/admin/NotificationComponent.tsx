"use client";

import * as React from "react";
// import { LuUser } from "react-icons/lu";
// import { FiUsers } from "react-icons/fi";
import { RiCalendarEventLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const components = [
    // {
    //     title: "Users",
    //     href: "/notification/user",
    //     icon: <LuUser className="h-5 w-5" />,
    // },
    // {
    //     title: "Organizer",
    //     href: "/notification/organizer",
    //     icon: <FiUsers className="h-5 w-5" />,
    // },
    {
        title: "Event",
        href: "/notification/event",
        icon: <RiCalendarEventLine className="h-5 w-5" />,
    },
];

export function NotificationComponent() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem className=" left-[-100px] ">
                    <NavigationMenuTrigger>
                        <IoIosNotificationsOutline className="h-12 w-12 p-2 text-primary-color hover:bg-primary-color hover:text-dark-description-color rounded-[6px] " />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className=" flex ">
                            {components.map((component) => (
                                <ListItem className="hover:text-secondary-color-text hover:bg-primary-color dark:hover:text-primary-color dark:hover:bg-white rounded-[6px]"
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.icon}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
    title: string;
    children: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            className
                        )}
                        {...props}
                    >
                        <div className="flex items-center gap-2">
                            {children}
                            <span className=" text-sm font-medium leading-none">{title}</span>
                        </div>
                    </a>
                </NavigationMenuLink>
            </li>
        );
    }
);

ListItem.displayName = "ListItem";
