"use client";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

const chartConfig = {
  Indoor: {
    label: "Indoor",
    color: "var(--chart-5)",
  },
  Outdoor: {
    label: "Outdoor",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "January", Indoor: 186, Outdoor: 80 },
  { month: "February", Indoor: 305, Outdoor: 200 },
  { month: "March", Indoor: 237, Outdoor: 120 },
  { month: "April", Indoor: 73, Outdoor: 190 },
  { month: "May", Indoor: 209, Outdoor: 130 },
  { month: "June", Indoor: 214, Outdoor: 140 },
];

const AppAreaChart = () => {
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Total Visitors</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <AreaChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <defs>
            <linearGradient id="fillIndoor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-Indoor)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-Indoor)"
                stopOpacity={0.1}
              />
            </linearGradient>
            <linearGradient id="fillOutdoor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-Outdoor)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-Outdoor)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="Outdoor"
            type="natural"
            fill="url(#fillOutdoor)"
            fillOpacity={0.4}
            stroke="var(--color-Outdoor)"
            stackId="a"
          />
          <Area
            dataKey="Indoor"
            type="natural"
            fill="url(#fillIndoor)"
            fillOpacity={0.4}
            stroke="var(--color-Indoor)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};

export default AppAreaChart;
