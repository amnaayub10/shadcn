"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

const chartData = [
  { month: "January", Indoor: 186, Outdoor: 80 },
  { month: "February", Indoor: 305, Outdoor: 200 },
  { month: "March", Indoor: 237, Outdoor: 120 },
  { month: "April", Indoor: 73, Outdoor: 190 },
  { month: "May", Indoor: 209, Outdoor: 130 },
  { month: "June", Indoor: 214, Outdoor: 140 },
];
const chartConfig = {
  Indoor: {
    label: "Indoor",
    color: "var(--chart-1)",
  },
  Outdoor: {
    label: "Outdoor",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

const AppLineChart = () => {
  return (
    <ChartContainer config={chartConfig} className="mt-6">
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line
          dataKey="Indoor"
          type="monotone"
          stroke="var(--color-Indoor)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="Outdoor"
          type="monotone"
          stroke="var(--color-Outdoor)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
};

export default AppLineChart;
