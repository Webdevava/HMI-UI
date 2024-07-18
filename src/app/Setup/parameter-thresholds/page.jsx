import React from "react";

const ParameterThresholds = () => {
  // Example thresholds for each parameter
  const thresholds = [
    { name: "Temperature", threshold: "10°C - 30°C" },
    { name: "Pressure", threshold: "0.8 atm - 1.5 atm" },
    { name: "Humidity", threshold: "40% - 70%" },
    { name: "pH Level", threshold: "6.5 - 8.5" },
    { name: "TDS", threshold: "200 ppm - 500 ppm" },

  ];

  return (
    <div>
      <h1>Parameter Thresholds Page</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Parameter Name</th>
            <th className="px-4 py-2">Threshold</th>
          </tr>
        </thead>
        <tbody>
          {thresholds.map((param, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{param.name}</td>
              <td className="border px-4 py-2">{param.threshold}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParameterThresholds;
