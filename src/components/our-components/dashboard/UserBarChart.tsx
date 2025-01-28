"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { month: "January", ticketBuyer: 186, organizer: 80 },
    { month: "February", ticketBuyer: 305, organizer: 200 },
    { month: "March", ticketBuyer: 237, organizer: 120 },
    { month: "April", ticketBuyer: 73, organizer: 190 },
    { month: "May", ticketBuyer: 209, organizer: 130 },
    { month: "June", ticketBuyer: 214, organizer: 140 },
    { month: "July", ticketBuyer: 250, organizer: 160 },
    { month: "August", ticketBuyer: 300, organizer: 180 },
    { month: "September", ticketBuyer: 220, organizer: 150 },
    { month: "October", ticketBuyer: 270, organizer: 170 },
    { month: "November", ticketBuyer: 290, organizer: 190 },
    { month: "December", ticketBuyer: 310, organizer: 200 },
]

const chartConfig = {
    ticketBuyer: {
        label: "Ticket Buyer",
        color: "hsl(var(--chart-1))",
    },
    organizer: {
        label: "Organizer",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export function UserBarChart() {
    return (
        <Card>
            <CardHeader className=" m-5 ">
                <CardTitle  className=" text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-dark-description-color">Bar Chart of Monthly Visitors</CardTitle>
                <CardDescription className="dark:text-dark-description-color text-description-color text-sm md:text-base xl:text-lg">
                    This bar chart show the number of ticket buyers and organizers from January to December 2024
                </CardDescription>
            </CardHeader>
            <CardContent >
                <ChartContainer className=" h-[500px] w-full " config={chartConfig}>
                    <BarChart className=" rounded-t-[10px] " accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <Bar dataKey="ticketBuyer" className=" fill-secondary-color "/>
                        <Bar dataKey="organizer" className=" fill-primary-color "/>
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-1 text-sm">
                <div className=" flex gap-1">
                    <p
                        className=" text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-dark-description-color ">
                        Trending up by 5.2% this month
                    </p>
                    <TrendingUp className="h-7 w-7"/>
                </div>
                <div
                    className=" text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color">
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter>
        </Card>
    )
}