import {columns } from "./table/columns"
import { DataTable } from "@/components/ui/data-table"
import {mockUsers} from "@/mock-data/user-data";
import {User} from "@/lib/definitions";

async function getData(): Promise<User[]> {
    return mockUsers;
}

export default async function DemoPage() {
    const data:User[] = await getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
