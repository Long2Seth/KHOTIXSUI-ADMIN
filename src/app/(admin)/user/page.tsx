import {userColumns } from "@/lib/table/UserColumns"
import { DataTable } from "@/components/ui/data-table"
import {mockUsers} from "@/mock-data/user-data";
import {User} from "@/lib/definitions";

async function getData(): Promise<User[]> {
    return mockUsers;
}

export default async function UserPage() {
    const data:User[] = await getData()

    return (
        <div className="flex flex-col gap-2 mx-auto p-2 w-full">
            <div className={"bg-red-200 w-full h-[60px] flex items-center justify-between"}>
                this is user on develop
            </div>
            <div className={"bg-green-300 w-full h-[60px] flex items-center justify-between"}>
                this is user on develop
            </div>
            <DataTable columns={userColumns} data={data}/>
        </div>
    )
}
