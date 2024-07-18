import React from "react";

const DataLoggingFrequency = () => {
  // Example data logging frequencies
  const dataLoggingFrequencies = [
    { name: "Event Logs", frequency: "Every minute" },
    { name: "Error Logs", frequency: "Hourly" },
    { name: "Performance Logs", frequency: "Daily" },
    { name: "Audit Logs", frequency: "Weekly" },
  ];

  return (
    <div>
      <h1>Data Logging Frequency Page</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Log Type</th>
            <th className="px-4 py-2">Logging Frequency</th>
          </tr>
        </thead>
        <tbody>
          {dataLoggingFrequencies.map((log, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{log.name}</td>
              <td className="border px-4 py-2">{log.frequency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataLoggingFrequency;
