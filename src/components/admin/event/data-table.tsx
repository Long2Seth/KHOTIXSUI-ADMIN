"use client";

import * as React from "react";
import {
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import {ChevronDown, Calendar} from "lucide-react";
import {format} from "date-fns";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {columnEvent} from "./columns";
import {Pagination} from "@/components/admin/Pagination";
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from "@/components/ui/select";
import {Popover, PopoverTrigger, PopoverContent} from "@/components/ui/popover";
import {Calendar as CalendarComponent} from "@/components/ui/calendar";
import {useMemo, useState} from "react";
import * as XLSX from "xlsx";
import Image from "next/image";
import {allEventData} from "@/lib/admin/Event";

const locations = Array.from(new Set(allEventData.map(order => order.location)));
const categories = Array.from(new Set(allEventData.map(order => order.category)));

export function EventComponent() {

    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [selectedLocation, setSelectedLocation] = useState("all");
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [eventName, setEventName] = useState("");
    const [gender, setGender] = useState("all");

    const filteredData = useMemo(() => {
        return allEventData.filter((item) => {
            const matchesLocation = selectedLocation === "all" || item.location === selectedLocation;
            const matchesDate = !date || new Date(item.startDate).toDateString() === date.toDateString();
            const matchesEventName = item.eventName.toLowerCase().includes(eventName.toLowerCase());
            const matchesGender = gender === "all" || item.gender.toLowerCase() === gender.toLowerCase();
            const matchesStatus = selectedStatus === "all" || item.status === selectedStatus;
            const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
            return matchesLocation && matchesDate && matchesEventName && matchesGender && matchesStatus && matchesCategory;
        });
    }, [selectedLocation, selectedStatus, date, eventName, gender, selectedCategory]);

    const paginatedData = useMemo(
        () => filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
        [filteredData, currentPage, itemsPerPage]
    );

    // Export to Excel function
    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(allEventData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Payments");
        XLSX.writeFile(wb, "payments.xlsx");
    };

    const table = useReactTable({
        data: paginatedData,
        columns: columnEvent,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    return (
        <section className=" w-full flex flex-col ">
            <section>
                <div className="flex justify-between items-start sm:items-center gap-4 mb-5 ">
                    <div>
                        <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text mb-1 md:mb-2 ">EVENT MANAGEMENT </h1>
                        <p className="text-description-color text-sm md:text-base xl:text-lg font-light dark:text-dark-description-color">Real-time
                            insights for data-driven decisions</p>
                    </div>
                    <Button
                        onClick={exportToExcel}
                        className="text-secondary-color-text rounded-[6px] bg-primary-color hover:bg-primary-color/80 px-4 w-auto"
                    >
                        Export Excel
                    </Button>
                </div>
            </section>
            <section className="w-full bg-white p-10 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5 space-y-4">

                <section className=" w-full flex flex-col items-center gap-2 lg:flex-row ">
                    <Input
                        placeholder="Search by event name"
                        value={eventName}
                        onChange={(event) => setEventName(event.target.value)}
                        className=" w-full border-[1px] h-[50px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text"
                    />
                    <section className="w-full lg:w-auto flex flex-col sm:flex-row gap-2">
                        <Select onValueChange={setSelectedLocation}>
                            <SelectTrigger
                                className={`w-full lg:max-w-[300px] h-[50px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 ${selectedLocation === "all" ? "text-gray-400 dark:text-gray-400" : "text-black dark:text-gray-400"} dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text`}>
                                <SelectValue placeholder="Location"/>
                            </SelectTrigger>
                            <SelectContent
                                className="w-full lg:max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectItem value="all">All</SelectItem>
                                {locations.map(location => (
                                    <SelectItem key={location} value={location}>{location}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select onValueChange={setSelectedStatus}>
                            <SelectTrigger
                                className={`w-full lg:max-w-[250px] h-[50px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 ${selectedStatus === "all" ? "text-gray-400 dark:text-gray-400" : "text-black dark:text-black"} dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text`}>
                                <SelectValue placeholder="Status "/>
                            </SelectTrigger>
                            <SelectContent
                                className="w-full lg:max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text">
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="enable">Enable</SelectItem>
                                <SelectItem value="disable">Disable</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select onValueChange={setGender}>
                            <SelectTrigger
                                className={`w-full lg:max-w-[250px] h-[50px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 ${gender === "all" ? "text-gray-400 dark:text-gray-400" : "text-black dark:text-black"} dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text`}>
                                <SelectValue placeholder="Gender "/>
                            </SelectTrigger>
                            <SelectContent
                                className="w-full lg:max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text">
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select onValueChange={setSelectedCategory}>
                            <SelectTrigger
                                className={`w-full lg:max-w-[250px] h-[50px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 ${selectedCategory === "all" ? "text-gray-400 dark:text-gray-400" : "text-black dark:text-black"} dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text`}>
                                <SelectValue placeholder="Category "/>
                            </SelectTrigger>
                            <SelectContent
                                className="w-full lg:max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text">
                                <SelectItem value="all">All</SelectItem>
                                {categories.map(category => (
                                    <SelectItem key={category} value={category}>{category}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </section>

                    <section className="w-full lg:w-auto flex flex-col sm:flex-row gap-2 ">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    className={`w-full lg:max-w-[220px] h-[50px]  p-5 border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 ${date ? "text-black" : "text-gray-400"} dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text`}>
                                    <Calendar className="mr-2 h-4 w-4"/>
                                    {date ? format(date, "PPP") :
                                        <span className="text-md md:text-lg">Pick a start date</span>}
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

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline"
                                        className={`h-[50px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text `}>
                                    Columns <ChevronDown/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className={`border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text`}
                                align="end">
                                {table
                                    .getAllColumns()
                                    .filter((column) => column.getCanHide())
                                    .map((column) => {
                                        return (
                                            <DropdownMenuCheckboxItem
                                                key={column.id}
                                                className="capitalize hover:bg-blue-800 dark:hover:bg-khotixs-background-dark"
                                                checked={column.getIsVisible()}
                                                onCheckedChange={(value) =>
                                                    column.toggleVisibility(!!value)
                                                }
                                            >
                                                {column.id}
                                            </DropdownMenuCheckboxItem>
                                        );
                                    })}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </section>

                </section>

                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        className="hover:bg-gray-100 dark:hover:bg-khotixs-background-dark "
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell
                                                className=" py-2 "
                                                key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columnEvent.length}
                                        className="h-20 text-center text-lg md:text-2xl xl:text-4xl "
                                    >
                                        <div className=" flex w-full justify-center items-center">
                                            <Image src="/no-data.png" alt="noData" width={50} height={50}/>
                                            <span>No results.</span>
                                        </div>

                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <Pagination
                    totalItems={filteredData.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                    onItemsPerPageChange={setItemsPerPage}
                />
            </section>
        </section>
    );
}