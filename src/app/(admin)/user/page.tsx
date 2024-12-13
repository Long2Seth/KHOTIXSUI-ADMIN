'use client'
import React, { useState, useEffect } from "react";
import { userColumns } from "@/lib/table/UserColumns";
import { DataTable } from "@/components/ui/data-table";
import { mockUsers } from "@/mock-data/user-data";
import { User } from "@/lib/definitions";
import { Button } from "@/components/ui/button";
import { FileSpreadsheet } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SelectScrollable } from "@/components/admin/SelectComponent";
import { mockUserSearch } from "@/mock-data/search-column/user-search";

// Mock data fetch for the client
async function getData(): Promise<User[]> {
    return mockUsers;
}

export default function UserPage() {
    const [data, setData] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

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

    return (
        <div className="flex flex-col gap-2 mx-auto p-2 w-full">
            <div className={"w-full h-[50px] flex items-center justify-between"}>
                <div className={"flex flex-col items-left justify-center"}>
                    <h1 className={"text-[18px] font-bold"}>USER MANAGEMENT</h1>
                    <p className={"text-[14px] text-gray-800"}>Real-time insights for data-driven decisions</p>
                </div>
                <div className={"flex items-center justify-center"}>
                    <Button className={"bg-primary-color w-[150px] h-[45px] text-[18px]"}>
                        <FileSpreadsheet className={"w-[8px] h-auto"}/>
                        Export excel
                    </Button>
                </div>
            </div>
            <div className={"w-full h-[50px] flex items-center gap-[20px]"}>
                <Input className={"w-[300px] h-[40px] text-[18px]"} placeholder={"Search..."}/>
                <SelectScrollable
                    options={mockUserSearch}
                    placeholder="Select a Column"
                    onSelect={handleSelect}
                />
            </div>
            {loading ? (
                <div className="text-center mt-4">Loading...</div>
            ) : (
                <DataTable columns={userColumns} data={data} />
            )}
        </div>
    );
}