"use client";

import { Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { TrendingUp } from "lucide-react";

const chartConfig = {
OutdoorWeddings: {
    label: "Outdoor weddings",
    color: "var(--chart-6)"
  },
  MusicFestival: {
    label: "Music Festival",
    color: "var(--chart-1)",
  },
  cinema: {
    label: "Open-Air Cinema",
    color: "var(--chart-2)",
  },
  CorporatePicnic: {
    label: "Corporate Picnic",
    color: "var(--chart-3)",
  },
  Charity: {
    label: "Charity Fun Run/Walk",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

const chartData = [
  { browser: "OutdoorWeddings", visitors: 275, fill: "var(--color-OutdoorWeddings)" },
  { browser: "MusicFestival", visitors: 200, fill: "var(--color-MusicFestival)" },
  { browser: "cinema", visitors: 287, fill: "var(--color-cinema)" },
  { browser: "Charity", visitors: 173, fill: "var(--color-Charity)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

const AppPieChart = () => {

  // If you don't use React compiler use useMemo hook to improve performance
  const totalVisitors = chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Events Booked</h1>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="visitors"
            nameKey="browser"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Visitors
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      <div className="mt-4 flex flex-col gap-2 items-center">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4 text-green-500" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </div>
    </div>
  );
};

export default AppPieChart;
