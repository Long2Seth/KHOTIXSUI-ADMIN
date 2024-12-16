'use client';
import React, {useState} from "react";
import {Calendar} from 'lucide-react';
import * as XLSX from "xlsx";
import {format} from "date-fns";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Calendar as CalendarComponent} from "@/components/ui/calendar";
import Image from "next/image";
import {Pagination} from "@/components/admin/Pagination";
import {eventNotificationData} from "@/lib/admin/EventNotificationData";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

export default function EventNotificationComponent() {
    const [searchData, setSearchData] = useState("");
    const [date, setDate] = useState<Date>();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const filterOrderData = eventNotificationData.filter(attendance =>
        attendance.eventName.toLowerCase().includes(searchData.toLowerCase()) ||
        attendance.id.toLowerCase().includes(searchData.toLowerCase())
    );

    const totalItems = filterOrderData.length;

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(eventNotificationData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "EventNotifications");
        XLSX.writeFile(wb, "event_notifications.xlsx");
    };

    const currentItems = filterOrderData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <section className="w-full border-primary-color overflow-x-hidden">
            <CardHeader>
                <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 my-5 ">
                    <CardTitle>
                        <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text my-2">NOTIFICATION EVENTS</h1>
                        <p className="text-description-color text-sm md:text-base xl:text-lg font-light dark:text-dark-description-color">Real-time
                            insights for data-driven decisions</p>
                    </CardTitle>
                    <Button
                        onClick={exportToExcel}
                        className="text-secondary-color-text rounded-[6px] bg-primary-color hover:bg-primary-color/80 w-full sm:w-auto"
                    >
                        Export Excel
                    </Button>
                </section>
            </CardHeader>

            <CardContent className="bg-white p-10 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5 space-y-4">
                <section className="flex flex-col sm:flex-row gap-4 mb-6">
                    <Input
                        placeholder="Search"
                        value={searchData}
                        onChange={(e) => setSearchData(e.target.value)}
                        className="border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text"
                    />
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Select>
                            <SelectTrigger
                                className="min-w-[200px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectValue placeholder="Events"/>
                            </SelectTrigger>
                            <SelectContent
                                className="min-w-[200px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectItem value="queen">The Rise Of The Queen</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger
                                className="max-w-[250px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectValue placeholder="Publish"/>
                            </SelectTrigger>
                            <SelectContent
                                className="min-w-[200px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectItem className="dark:hover:text-primary-color-text"
                                            value="published">Published</SelectItem>
                                <SelectItem className="dark:hover:text-primary-color-text"
                                            value="draft">Draft</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                className="max-w-[400px] h-[50px] p-5 border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <Calendar className="mr-2 h-4 w-4"/>
                                {date ? format(date, "PPP") : <span className="text-md md:text-lg">Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-gray-100 rounded-[6px]">
                            <CalendarComponent
                                className="bg-white dark:bg-khotixs-background-dark dark:text-secondary-color-text rounded-[6px]"
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </section>
                <section className="w-full overflow-x-auto">
                    <div className=" w-full inline-block align-middle">
                        <div className="border rounded-[6px]">
                            <Table className="w-full">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead
                                            className="px-2 py-5 w- lg:w-[150px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">ID</TableHead>
                                        <TableHead
                                            className="px-2 py-5 lg:w-[600px] pl-20 text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">EVENT
                                            NAME</TableHead>
                                        <TableHead
                                            className="px-2 py-5 lg:w-[320px] text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">EVENT
                                            DATE</TableHead>

                                        <TableHead
                                            className="px-2 py-5 lg:w-[400px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">LOCATION</TableHead>
                                        <TableHead
                                            className="px-2 py-5 lg:w-[100px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">QTY</TableHead>
                                        <TableHead
                                            className="px-2 py-5 lg:w-[100px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">TOTAL</TableHead>
                                    </TableRow>
                                </TableHeader>
                            </Table>
                            <Accordion type="single" collapsible className="w-full ">
                                {currentItems.map((orderData) => (
                                    <AccordionItem key={orderData.id} value={orderData.id}>
                                        <AccordionTrigger>
                                            <Table className=" h-full ">
                                                <TableBody>
                                                    <TableRow
                                                        className="hover:bg-gray-100 dark:hover:bg-khotixs-background-dark">
                                                        <TableCell
                                                            className="px-2 py-5 lg:w-[150px] text-start text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{orderData.id}
                                                        </TableCell>

                                                        <TableCell className=" px-2 py-3 flex items-center text-start w-[600px]     ">
                                                            <Image className="rounded-[6px]" width={80} height={10} src={orderData.image} alt="image" />
                                                            <p className="px-2 text-description-color justify-center text-start text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{orderData.eventName}</p>
                                                        </TableCell>

                                                        <TableCell
                                                            className="px-2 py-5 w-[320px] text-start text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{orderData.startDate + " / " + orderData.endDate}
                                                        </TableCell>
                                                        <TableCell
                                                            className="px-2 py-5 lg:w-[400px] text-start text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{orderData.location}
                                                        </TableCell>
                                                        <TableCell
                                                            className="px-2 py-5 lg:w-[100px] text-start text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">
                                                            {orderData.tickets.reduce((sum, ticket) => sum + ticket.qty, 0)}
                                                        </TableCell>
                                                        <TableCell
                                                            className="px-2 py-5 lg:w-[100px] text-start text-green-600 font-semibold text-[10px] md:text-sm xl:text-base">
                                                            {"$" + orderData.tickets.reduce((sum, ticket) => sum + ticket.total, 0)}
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>

                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <Table className="w-full">
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead
                                                            className="px-2 py-5 w- lg:w-[150px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">TICKET
                                                            ID</TableHead>
                                                        <TableHead
                                                            className="px-2 py-5 lg:w-[600px] pl-20 text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">TICKET NAME </TableHead>
                                                        <TableHead
                                                            className="px-2 py-5 lg:w-[320px] text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">TICKET TYPE</TableHead>
                                                        <TableHead
                                                            className="px-2 py-5 lg:w-[400px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">PRICE</TableHead>
                                                        <TableHead
                                                            className="px-2 py-5 lg:w-[100px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text "    >QTY</TableHead>
                                                        <TableHead
                                                            className="px-2 py-5 lg:w-[100px] text-start text-title-color text-sm md:text-md xl:text-lg dark:text-secondary-color-text ">TOTAL</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {orderData.tickets.map((ticket) => (
                                                        <TableRow key={ticket.id}
                                                                  className="hover:bg-gray-100 dark:hover:bg-khotixs-background-dark">
                                                            <TableCell
                                                                className="px-2 text-start text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{ticket.id}</TableCell>
                                                            <TableCell
                                                                className="px-2 text-start text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{ticket.name}</TableCell>
                                                            <TableCell
                                                                className="px-2 text-start text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{ticket.type}</TableCell>
                                                            <TableCell
                                                                className="px-2 text-start text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{"$" + ticket.price}</TableCell>
                                                            <TableCell
                                                                className="px-2 py-5 lg:w-[100px] text-start text-description-color text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{ticket.qty}</TableCell>
                                                            <TableCell
                                                                className="px-2 py-5 lg:w-[100px] text-start text-green-600 font-semibold text-[10px] md:text-sm xl:text-base">{"$" + ticket.total}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>
                <Pagination
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                    onItemsPerPageChange={setItemsPerPage}
                />
            </CardContent>
        </section>
    );
}