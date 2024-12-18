'use client'

import CardInfoDashboard from "@/components/admin/CardInfoDashboard";
import {UserBarChart} from "@/components/admin/UserBarChart";
import {OrganizerBarChart} from "@/components/admin/OrganizerBarChart";

export default function DashboardComponent() {
    return (
        <section>

            <section className="w-full mx-auto space-y-7 ">

                <div className=" flex justify-between ">
                    <div className=" space-y-2 ">
                        <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">
                            DASHBOARD
                        </h1>
                        <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">
                            Real-time insights for data-driven decisions
                        </p>
                    </div>
                </div>

                <CardInfoDashboard/>

                <UserBarChart/>

                <OrganizerBarChart/>


            </section>

        </section>
    );
}