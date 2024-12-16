'use client'
import {userColumns } from "@/lib/table/UserColumns"
import { DataTable } from "@/components/ui/data-table"
import {mockUsers} from "@/mock-data/user-data";
import {User} from "@/lib/definitions";
import {Button} from "@/components/ui/button";
import {FileSpreadsheet} from "lucide-react";
import {Input} from "@/components/ui/input";
import {SelectScrollable} from "@/components/admin/SelectComponent";
import {mockOrganizerSearch} from "@/mock-data/search-column/organizer-search";

async function getData(): Promise<User[]> {
    return mockUsers;
}

export default async function OrganizerPage() {
    const data:User[] = await getData()
    const handleSelect = (value: string) => {
        console.log("Selected column:", value);
    };

    return (
        <main className="flex flex-col gap-2 mx-auto p-2 w-full">
            <div className={"w-full h-[50px] flex items-center justify-between"}>
                <div className={"flex flex-col  items-center justify-center"}>
                    <h1 className={"text-[18px] font-bold"}>ORGANIZER MANAGEMENT</h1>
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
                    options={mockOrganizerSearch}
                    placeholder="Select a Column"
                    onSelect={handleSelect}

                />
            </div>
            <DataTable columns={userColumns} data={data}/>
        </main>
    )
}
