import React from "react";

const RealtimeMonitoring = () => {
  // Example values for each parameter
  const parameters = [
    { name: "Temperature", value: "25°C" },
    { name: "Pressure", value: "1.2 atm" },
    { name: "Humidity", value: "60%" },
    { name: "pH Level", value: "7.2" },
    { name: "TDS", value: "300 ppm" },
    { name: "Chlorine Level", value: "0.5 ppm" },
  ];

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
