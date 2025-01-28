'use client';
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
import {ChevronDown} from "lucide-react";

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
import {columnsOrganizer} from "./columns";
import {Pagination} from "@/components/our-components/Pagination";
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from "@/components/ui/select";
import {useMemo, useState} from "react";
import * as XLSX from "xlsx";
import Image from "next/image";
import LoadingComponent from "@/components/our-components/Loading";
import {useGetAllOrganizerQuery} from "@/redux/feature/user/Organizer";

export function OrganizerComponent() {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [selectedVerified, setSelectedVerified] = useState("all");
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [selectedGender, setSelectedGender] = useState("all");

    const { data, isLoading } = useGetAllOrganizerQuery({
        pageNumber: currentPage - 1,
        pageSize: itemsPerPage,
    });

    const organizerData = data?.content || [];

    const filteredData = useMemo(() => {
        return organizerData.filter((item) => {
            const matchVerified = selectedVerified === "all" || item.verified.toString() === selectedVerified;
            const matchStatus = selectedStatus === "all" || item.status === Number(selectedStatus);
            const matchGender = selectedGender === "all" || item.gender === selectedGender;
            return matchVerified && matchStatus && matchGender;
        });
    }, [organizerData, selectedVerified, selectedStatus, selectedGender]);

    const paginatedData = useMemo(
        () => filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
        [filteredData, currentPage, itemsPerPage]
    );

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(organizerData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Organizers");
        XLSX.writeFile(wb, "organizers.xlsx");
    };

    const table = useReactTable({
        data: paginatedData,
        columns: columnsOrganizer,
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
        <section className="w-full flex flex-col">
            <section>
                <div className="flex justify-between items-start sm:items-center gap-4 mb-5">
                    <div>
                        <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text mb-1 md:mb-2">ORGANIZER
                            MANAGEMENT</h1>
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
                <section className="w-full flex flex-col items-center gap-2 lg:flex-row">
                    <Input
                        placeholder="Search by user name"
                        value={(table.getColumn("username")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("username")?.setFilterValue(event.target.value)
                        }
                        className="w-full border-[1px] h-[50px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text"
                    />
                    <section className="w-full lg:w-auto flex flex-col sm:flex-row gap-2">
                        <Select onValueChange={setSelectedVerified}>
                            <SelectTrigger
                                className={`w-full lg:max-w-[300px] h-[50px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 ${selectedVerified === "all" ? "text-gray-400 dark:text-gray-400" : "text-black dark:text-gray-400"} dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text`}>
                                <SelectValue placeholder="Verified"/>
                            </SelectTrigger>
                            <SelectContent
                                className="w-full lg:max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="true">Verified</SelectItem>
                                <SelectItem value="false">Padding</SelectItem>
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
                    </section>

                    <section className="w-full lg:w-auto flex flex-col sm:flex-row gap-2">
                        <Select onValueChange={setSelectedGender}>
                            <SelectTrigger
                                className={`w-full lg:max-w-[250px] h-[50px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 ${selectedGender === "all" ? "text-gray-400 dark:text-gray-400" : "text-black dark:text-black"} dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text`}>
                                <SelectValue placeholder="Gender"/>
                            </SelectTrigger>
                            <SelectContent
                                className="w-full lg:max-w-[300px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-0 dark:text-secondary-color-text">
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                            </SelectContent>
                        </Select>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline"
                                        className={`h-[50px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text`}>
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
                    {isLoading ? (
                        <div className="flex justify-center items-center h-20 text-lg md:text-2xl xl:text-4xl">
                            <LoadingComponent/>
                        </div>
                    ) : (
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
                                            className="hover:bg-gray-100 dark:hover:bg-khotixs-background-dark"
                                            key={row.id}
                                            data-state={row.getIsSelected() && "selected"}
                                        >
                                            {row.getVisibleCells().map((cell) => (
                                                <TableCell
                                                    className="py-2"
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
                                            colSpan={columnsOrganizer.length}
                                            className="h-20 text-center text-lg md:text-2xl xl:text-4xl"
                                        >
                                            <div className="flex w-full justify-center items-center">
                                                <Image src="/no-data.png" alt="noData" width={50} height={50}/>
                                                <span>No results.</span>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    )}
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