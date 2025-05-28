"use client";
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
  Indoor: {
    label: "Indoor",
    color: "var(--chart-4)",
  },
  Outdoor: {
    label: "Outdoor",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "January",   Indoor: 186, Outdoor: 80 },
  { month: "February", Indoor: 305, Outdoor: 200 },
  { month: "March", Indoor: 237, Outdoor: 120 },
  { month: "April", Indoor: 73, Outdoor: 190 },
  { month: "May", Indoor: 209, Outdoor: 130 },
  { month: "June", Indoor: 214, Outdoor: 140 },
];

const AppBarChart = () => {
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Total Events</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="Indoor" fill="var(--color-Indoor)" radius={4} />
          <Bar dataKey="Outdoor" fill="var(--color-Outdoor)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default AppBarChart;
