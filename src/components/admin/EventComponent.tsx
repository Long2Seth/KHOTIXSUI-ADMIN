'use client';
import React, { useState } from "react";
import { Calendar } from 'lucide-react';
import * as XLSX from "xlsx";
import { format } from "date-fns";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Pagination } from "@/components/admin/Pagination";
import { AllEventData } from "@/lib/admin/Event";
import { ActionEventComponent } from "@/components/admin/ActionEventComponent";

const categories = ["Sport", "Technology", "Music", "Art"];
const locations = ["San Francisco, CA", "Austin, TX", "Seattle, WA", "Los Angeles, CA", "New York, NY", "Boston, MA", "Chicago, IL", "Denver, CO", "San Diego, CA", "San Jose, CA"];

export default function EventComponent() {
    const [searchData, setSearchData] = useState("");
    const [date, setDate] = useState<Date>();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [category, setCategory] = useState("all");
    const [location, setLocation] = useState("all");
    const [status, setStatus] = useState("all");

    // Filter events based on search term, category, location, and status
    const filteredData = AllEventData.filter(event => {
        return (
            (category === "all" || event.category === category) ||
            (location === "all" || event.location === location) ||
            (status === "all" || event.status === status) ||
            event.eventName.toLowerCase().includes(searchData.toLowerCase())
        );
    });

    const totalItems = filteredData.length;

    // Export to Excel function
    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(AllEventData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Events");
        XLSX.writeFile(wb, "events.xlsx");
    };

    // Get current items for pagination
    const currentItems = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <section className="w-full border-primary-color ">
            <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 my-5 ">
                    <CardTitle>
                        <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text my-2 ">EVENT
                            DATA</h1>
                        <p className="text-description-color text-sm md:text-base xl:text-lg font-light dark:text-dark-description-color">Real-time
                            insights for data-driven decisions</p>
                    </CardTitle>
                    <Button
                        onClick={exportToExcel}
                        className="text-secondary-color-text rounded-[6px] bg-primary-color hover:bg-primary-color/80 w-full sm:w-auto"
                    >
                        Export Excel
                    </Button>
                </div>
            </CardHeader>

            <CardContent className="bg-white p-10 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5 space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <Input
                        placeholder="Search by event name"
                        value={searchData}
                        onChange={(e) => setSearchData(e.target.value)}
                        className="border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text"
                    />
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Select onValueChange={setCategory}>
                            <SelectTrigger
                                className={`min-w-[200px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text ${category === "all" ?  "text-gray-400" : "text-black"}`}>
                                <SelectValue placeholder="Category"/>
                            </SelectTrigger>
                            <SelectContent
                                className="min-w-[200px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectItem value="all">ALL</SelectItem>
                                {categories.map(category => (
                                    <SelectItem key={category.toLowerCase()} value={category.toLowerCase()}>{category}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select onValueChange={setLocation}>
                            <SelectTrigger
                                className={`min-w-[200px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text ${location === "all" ?  "text-gray-400" : "text-black"}`}>
                                <SelectValue placeholder="Location"/>
                            </SelectTrigger>
                            <SelectContent
                                className="min-w-[200px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text">
                                <SelectItem value="all">ALL</SelectItem>
                                {locations.map(location => (
                                    <SelectItem key={location.toLowerCase()} value={location.toLowerCase()}>{location}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select onValueChange={setStatus}>
                            <SelectTrigger
                                className={`px-3 max-w-[250px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text ${status === "all" ?  "text-gray-400" : "text-black"}`}>
                                <SelectValue placeholder="Status"/>
                            </SelectTrigger>
                            <SelectContent
                                className="min-w-[200px] max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectItem value="all">ALL</SelectItem>
                                <SelectItem value="enable">Enable</SelectItem>
                                <SelectItem value="disable">Disable</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                className={`max-w-[400px] h-[50px] p-5 border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text ${date ? "text-black" : "text-gray-400"} `}>
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
                </div>
                <div className="overflow-x-auto">
                    <div className="inline-block align-middle">
                        <div className="border rounded-[6px]">
                            <Table className="">
                                <TableHeader className="">
                                    <TableRow>
                                        <TableHead className=" w-auto lg:min-w-[150px] text-center ">ID</TableHead>
                                        <TableHead className=" lg:min-w-[200px] text-start ">CREATE BY</TableHead>
                                        <TableHead className=" lg:min-w-[500px] pl-20 text-start ">EVENT
                                            NAME</TableHead>
                                        <TableHead className=" lg:min-w-[200px] text-start ">CATEGORY</TableHead>

                                        <TableHead className=" lg:min-w-[200px] ">START DATE</TableHead>
                                        <TableHead className=" lg.min-w-[200px] ">END DATE</TableHead>
                                        <TableHead className=" lg.min-w-[300px] text-start ">LOCATION</TableHead>
                                        <TableHead className=" lg.min-w-[200px] text-center ">STATUS</TableHead>
                                        <TableHead  className=" min-w-20"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className=" border-gray-300  " >
                                    {currentItems.map((orderData) => (
                                        <TableRow className="hover:bg-gray-100 dark:hover:bg-khotixs-background-dark"
                                                  key={orderData.id}>
                                            <TableCell className=" lg:w-[150px] text-center ">{orderData.id}</TableCell>
                                            <TableCell
                                                className=" lg.w-[200px] text-start ">{orderData.createBy}</TableCell>
                                            <TableCell className="flex items-center lg:w-[500px]">
                                                <Image className="rounded-[6px]" width={90} height={10}
                                                       src={orderData.image} alt="image"/>
                                                <p className=" px-2  text-description-color justify-center text-[10px] md:text-sm xl:text-base dark:text-dark-description-color">{orderData.eventName}</p>
                                            </TableCell>
                                            <TableCell
                                                className=" lg:min-w-[200px] text-start ">{orderData.category}</TableCell>
                                            <TableCell className=" lg:min-w-[200px] ">{orderData.startDate}</TableCell>
                                            <TableCell className=" lg:min-w-[200px] ">{orderData.endDate}</TableCell>
                                            <TableCell
                                                className=" lg:min-w-[300px] text-start ">{orderData.location}</TableCell>
                                            <TableCell
                                                className="text-center text-description-color text-[10px] md:text-sm xl:text-base">
                                                <Badge
                                                    className={`rounded-[6px] text[10px] md:text-base justify-center font-normal ${orderData.status === 'enable' ? 'bg-label-free text-label-text-primary hover:bg-label-free/90' : 'bg-label-paid text-label-text-primary hover:bg-label-paid/90'}`}>{orderData.status === 'enable' ? 'Enable' : 'Disable'}</Badge>
                                            </TableCell>
                                            <TableCell className=" min-w-20">
                                                <ActionEventComponent event={orderData} />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
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