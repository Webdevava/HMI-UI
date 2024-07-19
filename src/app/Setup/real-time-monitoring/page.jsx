"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const RealtimeMonitoring = () => {
  const [parameters, setParameters] = useState([]);

  useEffect(() => {
    const fetchParameters = async () => {
      try {
        const response = await axios.get(
          "https://hmi-backend-q9o67stnr-webdevavas-projects.vercel.app/api/parameters/latest"
        );
        console.log("API response:", response.data);

        if (response.status === 200) {
          const data = response.data.parameters;
          const transformedParameters = [
            { name: "Temperature", value: `${data.Temperature}°C` },
            { name: "Pressure", value: `${data.Pressure} atm` },
            { name: "Humidity", value: `${data.Humidity}%` },
            { name: "pH Level", value: `${data["pH Level"]}` },
            { name: "TDS", value: `${data.TDS} ppm` },
            { name: "Chlorine Level", value: `${data["Chlorine Level"]} ppm` },
          ];
          setParameters(transformedParameters);
        } else {
          console.error("Failed to fetch parameters:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching parameters:", error);
      }
    };

    // Initial fetch
    fetchParameters();

    // Set interval for refreshing data
    const intervalId = setInterval(fetchParameters, 1000); // Refresh every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Real-time Monitoring Page</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Parameter Name</th>
            <th className="px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {parameters.map((param, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{param.name}</td>
              <td className="border px-4 py-2">{param.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RealtimeMonitoring;
