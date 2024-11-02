import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface CustomLineChartProps {
  years: Array<number>;
  values: Array<number>;
  maxDomain: number;
  yAxisLabel?: string;
}

const CustomLineChart: React.FC<CustomLineChartProps> = ({
  years,
  values,
  maxDomain,
  yAxisLabel = "Tokens liberados acumulados",
}) => {
  const chartData = years.map((year, index) => ({
    year,
    liberados: values[index],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData} margin={{ bottom: 15, right: 8, top: 5 }}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="year"
          label={{
            value: "Año",
            position: "insideBottom",
            fontSize: "12px",
            dy: 15,
          }}
          tickLine={false}
          interval={0}
          angle={-90}
          tickFormatter={(tick) => `${tick}`}
          fontSize={"9px"}
          dy={10}
          axisLine={false}
        />
        <YAxis
          label={{
            value: yAxisLabel,
            angle: -90,
            position: "insideLeft",
            dy: 85,
            dx: 0,
            fontSize: "12px",
          }}
          tickLine={false}
          fontSize={"10px"}
          tickFormatter={(tick) => `${tick.toLocaleString()}`}
          domain={[0, maxDomain]}
          tickCount={6}
          axisLine={false}
        />
        <Tooltip formatter={(value: number) => value.toLocaleString()} />
        <Line type="linear" dataKey="liberados" stroke="#8E2BFF" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
