import {userColumns } from "@/lib/table/UserColumns"
import { DataTable } from "@/components/ui/data-table"
import {mockUsers} from "@/mock-data/user-data";
import {User} from "@/lib/definitions";

async function getData(): Promise<User[]> {
    return mockUsers;
}

export default async function OrganizerPage() {
    const data:User[] = await getData()

    return (
        <div className="container mx-auto py-10">
            <div>this is organizer on develop</div>
            <DataTable columns={userColumns} data={data} />
        </div>
    )
}
