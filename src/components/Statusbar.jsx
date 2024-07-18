"use client";
import { Network, Wifi } from "lucide-react";
import React, { useState, useEffect } from "react";


const Statusbar = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentDateTime(new Date());
      }, 1000); // Update every second

      return () => clearInterval(interval);
    }, []);

    const formatDate = (date) => {
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      };
      return date
        .toLocaleDateString("en-US", options)
        .replace(/(\d+)\/(\d+)\/(\d+),/, "$2-$1-$3,")
        .replace(",", " at ");
    };
  return (
    <div className="bg-gray-800 flex justify-between items-center px-2 h-[2.5rem] text-white">
      <div className="text-sm">{formatDate(currentDateTime)}</div>
      <div className=" flex justify-between items-center gap-2">
        <Wifi size={18} />
        <Network size={18} />
      </div>
    </div>
  );
};

export default Statusbar;
