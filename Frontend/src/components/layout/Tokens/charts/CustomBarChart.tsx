import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
} from "recharts";
import { useTheme } from "@mui/material/styles";

interface StackedBarChartProps {
  years: number[];
  values: number[];
}

const CustomBarChart: React.FC<StackedBarChartProps> = ({ years, values }) => {
  const data = years.map((year, index) => ({
    year: year.toString(),
    value: values[index],
    fillPercentage: values[index] / 10000,
  }));

  const theme = useTheme();

  return (
    <ResponsiveContainer width="100%" height={300} style={{ margin: "0 auto" }}>
      <BarChart data={data} margin={{ bottom: 15, right: 8, top: 5 }}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="year"
          label={{
            value: "Año",
            position: "insideBottom",
            fontSize: "12px",
            fontWeight: "400",
            dy: 12,
          }}
          tickLine={false}
          interval={0}
          angle={-90}
          fontSize={"9px"}
          dy={8}
          dx={-3}
          axisLine={false}
        />
        <YAxis
          label={{
            value: "Tokens liberados",
            angle: -90,
            position: "insideLeft",
            dy: 85,
            dx: 5,
            fontSize: "12px",
          }}
          tickLine={false}
          fontSize={"10px"}
          type="number"
          domain={[0, 10000]}
          ticks={[0, 2000, 4000, 6000, 8000, 10000]}
          axisLine={false}
        />
        <Tooltip />

        <Bar dataKey="value" fill={theme.palette.primary.main}>
          {data.map((index) => (
            <Cell key={`cell-${index}`}>
              <rect fill="#8884d8" mask={`url(#partialFill${index})`} />
              <mask id={`partialFill${index}`}>
                <rect fill="#82ca9d" />
              </mask>
            </Cell>
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
