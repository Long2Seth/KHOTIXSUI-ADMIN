import {OrderDataTable} from "@/components/admin/order-data/data-table";
import type {Metadata} from "next";

export const metadata: Metadata = {
    icons: "khotixs_logo.png",
    title: "Order Data page",
    description: "Generated by create next app",
};

export default function OrderDataPage(){
    return(
        <section>
            <OrderDataTable/>
        </section>
    )
}