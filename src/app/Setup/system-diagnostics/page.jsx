import React from "react";

const SystemDiagnostics = () => {
  // Example system diagnostics data
  const systemDiagnosticsData = [
    { name: "CPU Usage", value: "25%" },
    { name: "Memory Usage", value: "60%" },
    { name: "Disk Usage", value: "40%" },
    { name: "Network Traffic", value: "500 Mbps" },
    { name: "Temperature", value: "35°C" },
    { name: "Power Supply Voltage", value: "12V" },
  ];

  return (
    <div>
      <h1>System Diagnostics Page</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Parameter</th>
            <th className="px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {systemDiagnosticsData.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SystemDiagnostics;
