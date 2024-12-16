"use client"

import {TrendingUp} from "lucide-react"
import {Bar, BarChart, CartesianGrid, LabelList, XAxis} from "recharts"

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
    {month: "January", user: 6},
    {month: "February", user: 105},
    {month: "March", user: 37},
    {month: "April", user: 73},
    {month: "May", user: 29},
    {month: "June", user: 114},
    {month: "July", user: 190},
    {month: "August", user: 120},
    {month: "September", user: 20},
    {month: "October", user: 30},
    {month: "November", user: 28},
    {month: "December", user: 20},
]

const chartConfig = {
    user: {
        label: "User",
        color: "#AC1ED2",
    },
} satisfies ChartConfig

export function OrganizerBarChart() {
    return (
        <Card className=" dark:bg-khotixs-background-dark">
            <CardHeader>
                <CardTitle
                    className=" text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-dark-description-color dark:text-secondary-color-text">Bar
                    Chart - Organizer</CardTitle>
                <CardDescription className=" text-description-color text-sm md:text-base xl:text-lg ">January - December
                    2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            top: 10,
                        }}
                    >
                        <CartesianGrid vertical={false}/>
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel/>}
                        />
                        <Bar
                            dataKey="user"
                            fill="var(--color-user)" radius={6}>
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-primary-color-text dark:fill-secondary-color-text text-sm md:text-base"
                                fontSize={12}
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className=" flex gap-2">
                    <p
                        className=" text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-dark-description-color dark:text-secondary-color-text">
                        Trending up by 5.2% this month
                    </p>
                    <TrendingUp className="h-7 w-7"/>
                </div>
                <div className=" text-description-color text-sm md:text-base xl:text-lg ">
                    Showing total visitors for the last 12 months
                </div>
            </CardFooter>
        </Card>
    )
}