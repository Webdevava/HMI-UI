"use client";
import { useState } from "react";
import Header from "@/components/Header";
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from "recharts";
import Tank from "@/assets/Tank"; // Assuming this is the correct import path

const Home = () => {
  const [selectedExtinguisher, setSelectedExtinguisher] = useState(0);

  const data = [
    { name: "Total Dissolved Solids (TDS) Removal", value: 30 },
    { name: "Chlorine Removal", value: 20 },
    { name: "Bacteria Removal", value: 25 },
    { name: "Heavy Metals Removal", value: 15 },
    { name: "Turbidity Reduction", value: 10 },
  ];

  const dataMap = {
    0: [
      { name: "Total Dissolved Solids (TDS) Removal", value: 40 },
      { name: "Chlorine Removal", value: 10 },
      { name: "Bacteria Removal", value: 20 },
      { name: "Heavy Metals Removal", value: 15 },
      { name: "Turbidity Reduction", value: 15 },
    ],
    1: [
      { name: "Total Dissolved Solids (TDS) Removal", value: 10 },
      { name: "Chlorine Removal", value: 30 },
      { name: "Bacteria Removal", value: 10 },
      { name: "Heavy Metals Removal", value: 20 },
      { name: "Turbidity Reduction", value: 30 },
    ],
    2: [
      { name: "Total Dissolved Solids (TDS) Removal", value: 20 },
      { name: "Chlorine Removal", value: 20 },
      { name: "Bacteria Removal", value: 30 },
      { name: "Heavy Metals Removal", value: 5 },
      { name: "Turbidity Reduction", value: 25 },
    ],
    3: [
      { name: "Total Dissolved Solids (TDS) Removal", value: 30 },
      { name: "Chlorine Removal", value: 15 },
      { name: "Bacteria Removal", value: 15 },
      { name: "Heavy Metals Removal", value: 40 },
      { name: "Turbidity Reduction", value: 10 },
    ],
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const handleExtinguisherClick = (index) => {
    setSelectedExtinguisher(index);
  };

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180; // Define RADIAN here

    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#000" // black text color
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {` ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="h-full">
      <Header />
      <div className="flex items-center p-2 h-80">
        <div className="grid grid-cols-2 gap-4">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              className={`flex justify-center ${
                selectedExtinguisher === index ? "" : ""
              }`}
              onClick={() => handleExtinguisherClick(index)}
            >
              <Tank active={selectedExtinguisher === index} />
            </button>
          ))}
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={
                selectedExtinguisher !== null
                  ? dataMap[selectedExtinguisher]
                  : data
              }
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend align="right" verticalAlign="top" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Home;
