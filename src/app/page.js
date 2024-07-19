"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import axios from "axios";
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from "recharts";
import Tank from "@/assets/Tank";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CircleUser } from "lucide-react";

const Home = () => {
  const [selectedExtinguisher, setSelectedExtinguisher] = useState(0);
  const [firstTankData, setFirstTankData] = useState([]);
  const [isSystemRunning, setIsSystemRunning] = useState(false);

  useEffect(() => {
    const fetchFirstTankData = async () => {
      try {
        const response = await axios.get(
          "https://hmi-backend-q9o67stnr-webdevavas-projects.vercel.app/api/parameters/latest"
        );
        console.log("API response:", response.data);
        const data = response.data;

        if (response.status === 200) {
          const transformedData = [
            {
              name: "Total Dissolved Solids (TDS) Removal",
              value: data.parameters["Total Dissolved Solids (TDS) Removal"],
            },
            {
              name: "Chlorine Removal",
              value: data.parameters["Chlorine Removal"],
            },
            {
              name: "Bacteria Removal",
              value: data.parameters["Bacteria Removal"],
            },
            {
              name: "Heavy Metals Removal",
              value: data.parameters["Heavy Metals Removal"],
            },
            {
              name: "Turbidity Reduction",
              value: data.parameters["Turbidity Reduction"],
            },
          ];
          setFirstTankData(transformedData);
        } else {
          console.error(
            "Failed to fetch latest parameters:",
            response.data.message
          );
        }
      } catch (error) {
        console.error("Error fetching latest parameters:", error);
      }
    };

    if (isSystemRunning) {
      fetchFirstTankData();
      const interval = setInterval(fetchFirstTankData, 1000); // Refresh every 5 seconds
      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [isSystemRunning]);

  const dataMap = {
    0: firstTankData,
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
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#000"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {` ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const handleStart = () => {
    setIsSystemRunning(true);
  };

  const handleStop = () => {
    setIsSystemRunning(false);
  };

  if (!isSystemRunning) {
    return (
      <div className="h-full w-full bg-white flex flex-col items-center justify-center text-[#1633aa]  ">
        <h1 className="text-3xl mb-8 font-bold">
          Start the system to show stats
        </h1>
        <div className="flex bg-[#1633aa] text-white p-2 h-[75px] fixed w-[656px] bottom-0">
          <div className="flex flex-[2]">
            <button
              onClick={handleStart}
              className="flex-1 bg-[#3f9e56] text-white p-4 mx-2 rounded-lg"
            >
              START
            </button>
            <button
              onClick={handleStop}
              className="flex-1 bg-gray-700 text-white p-4 mx-2 rounded-lg"
            >
              STOP
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 flex-[1]">
            <CircleUser fill="#333a" size={36} />
            <span>Ankur</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full">
      <div className="flex text-white justify-evenly gap-1">
        <Dialog>
          <DialogTrigger asChild>
            <button className="flex-1 p-2 border-2 border-gray-200 bg-[#1633aa] rounded-lg">
              Program
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Program Access</DialogTitle>
              <DialogDescription>Engineer access required</DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p>Please contact your system administrator for access.</p>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <button className="flex-1 p-2 border-2 border-gray-200 bg-[#1633aa] rounded-lg">
              Process
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Processes</DialogTitle>
              <DialogDescription>Current active processes</DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <ul>
                <li>Water filtration: Active</li>
                <li>UV sterilization: Standby</li>
                <li>Pressure regulation: Active</li>
                <li>Backwash cycle: Scheduled in 2 hours</li>
              </ul>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <button className="flex-1 p-2 border-2 border-gray-200 bg-[#1633aa] rounded-lg">
              Data
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Cylinder Data</DialogTitle>
              <DialogDescription>
                Features and health information
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <ul>
                <li>Capacity: 500 gallons</li>
                <li>Filter type: Multi-stage carbon</li>
                <li>Last maintenance: 30 days ago</li>
                <li>Filter health: 85%</li>
                <li>Pressure: 40 PSI</li>
              </ul>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <button className="flex-1 p-2 border-2 border-gray-200 bg-[#1633aa] rounded-lg">
              Info
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Information</DialogTitle>
              <DialogDescription>
                Info About Selected Cylinder {selectedExtinguisher + 1}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {dataMap[selectedExtinguisher].map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 items-center gap-4"
                >
                  <span className="font-semibold">{item.name}:</span>
                  <span>{item.value}%</span>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <button className="flex-1 p-2 border-2 border-gray-200 bg-[#1633aa] rounded-lg">
              Save data
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Save Data</DialogTitle>
              <DialogDescription>Save current tank data</DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p>Data will be saved to: /var/log/tank_data/</p>
              <Button className="mt-4">Save to Local Storage</Button>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <button className="flex-1 p-2 border-2 border-gray-200 bg-[#1633aa] rounded-lg">
              Copy data
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Copy Data</DialogTitle>
              <DialogDescription>
                Copy data to external storage
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p>Please plug in USB pen drive to copy data.</p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
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
              data={dataMap[selectedExtinguisher]}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {dataMap[selectedExtinguisher].map((entry, index) => (
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
      <div className="flex bg-[#1633aa] text-white p-2 h-20">
        <div className="flex flex-[2]">
          <button
            onClick={handleStart}
            className="flex-1 bg-gray-700 text-white p-4 mx-2 rounded-lg"
          >
            START
          </button>
          <button
            onClick={handleStop}
            className="flex-1 bg-red-500 text-white p-4 mx-2 rounded-lg"
          >
            STOP
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 flex-[1]">
          <CircleUser fill="#333a" size={36} />
          <span>Ankur</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
