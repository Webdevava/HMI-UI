import React from "react";

const AlertSeverityLevels = () => {
  // Example alert severity levels
  const alertSeverityLevels = [
    {
      name: "Low",
      description:
        "Informational messages or alerts that require no immediate action.",
    },
    {
      name: "Medium",
      description:
        "Warnings or alerts that suggest potential issues or concerns that should be addressed.",
    },
    {
      name: "High",
      description:
        "Critical alerts indicating significant issues that need immediate attention.",
    },
    {
      name: "Critical",
      description:
        "Emergency alerts indicating severe issues requiring immediate action to prevent major disruptions.",
    },
  ];

  return (
    <div>
      <h1>Alert Severity Levels Page</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Severity Level</th>
            <th className="px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {alertSeverityLevels.map((level, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{level.name}</td>
              <td className="border px-4 py-2">{level.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlertSeverityLevels;
