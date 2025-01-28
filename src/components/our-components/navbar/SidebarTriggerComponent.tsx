import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {SidebarTrigger} from "@/components/ui/sidebar";

export default function SidebarTriggerComponent() {

    return (
        <section className=" flex ">
            <SidebarTrigger/>
            <Breadcrumb className=" mt-[4px] ">
                <BreadcrumbList>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink>INFORMATION DETAIL</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

        </section>
    );
}