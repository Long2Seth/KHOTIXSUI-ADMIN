'use client'
import { OrganizerColumns } from "@/lib/table/OrganizerColumns";
import { DataTable } from "@/components/ui/data-table";
import { mockOrganizer } from "@/mock-data/organizer-data";
import { User } from "@/lib/definitions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectScrollable } from "@/components/admin/SelectComponent";
import { mockOrganizerSearch } from "@/mock-data/search-column/organizer-search";
import * as XLSX from "xlsx";
import React, { useState, useEffect } from "react";
import { Pagination } from "@/components/admin/Pagination";

async function getData(): Promise<User[]> {
    return mockOrganizer;
}

export default function OrganizerPage() {
    const [data, setData] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // Fetch data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await getData();
            setData(fetchedData);
            setLoading(false);
        };

        fetchData();
    }, []);

    const handleSelect = (value: string) => {
        console.log("Selected column:", value);
    };

    const exportToExcel = () => {
        if (data.length === 0) {
            alert("No data available to export!");
            return;
        }

        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new(); // Create a new workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, "Organizer");
        XLSX.writeFile(workbook, "organizer.xlsx");
    };

    // Calculate the paginated data based on currentPage and itemsPerPage
    const totalItems = data.length;
    const startIdx = (currentPage - 1) * itemsPerPage;
    const paginatedData = data.slice(startIdx, startIdx + itemsPerPage);

    return (
        <main className="flex flex-col gap-2 mx-auto p-2 w-full">
            <div className={"w-full h-[100px] flex items-center justify-between"}>
                <div className={"flex flex-col  items-left justify-center"}>
                    <h1 className={"text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text my-2"}>ORGANIZER MANAGEMENT</h1>
                    <p className={"text-description-color text-sm md:text-base xl:text-lg font-light dark:text-dark-description-color"}>Real-time insights for data-driven decisions</p>
                </div>

                <div className={"flex items-center justify-center"}>
                    <Button
                        onClick={exportToExcel}
                        className="text-secondary-color-text rounded-[6px] bg-primary-color hover:bg-primary-color/80 w-full sm:w-auto"
                    >
                        Export Excel
                    </Button>
                </div>
            </div>
            <div className={"bg-white p-10 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5 space-y-4"}>
                <div className={"w-full h-[50px] flex items-center gap-[20px]"}>
                    <Input className={"w-[500px] border-[1px] text-md md:text-lg bg-white border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text dark:border"} placeholder={"Search..."}/>
                    <SelectScrollable
                        options={mockOrganizerSearch}
                        placeholder="Select a Column"
                        onSelect={handleSelect}
                    />
                </div>
                {loading ? (
                    <div className="text-center mt-4">Loading...</div>
                ) : (
                    <>
                        <DataTable columns={OrganizerColumns} data={paginatedData} />
                        <Pagination
                            totalItems={totalItems}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            onPageChange={setCurrentPage}
                            onItemsPerPageChange={setItemsPerPage}
                        />
                    </>
                )}
            </div>
        </main>
    );
}
