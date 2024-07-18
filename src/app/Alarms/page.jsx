import React from "react";

const Alarms = () => {
  // Sample data for alerts
  const alerts = [
    {
      id: 1,
      type: "Critical",
      message: "System temperature too high",
      timestamp: "2024-07-18 10:30:00",
    },
    {
      id: 2,
      type: "Warning",
      message: "Low water pressure detected",
      timestamp: "2024-07-18 11:15:00",
    },
    {
      id: 3,
      type: "Information",
      message: "System update available",
      timestamp: "2024-07-18 12:00:00",
    },
    {
      id: 4,
      type: "Critical",
      message: "Power outage detected",
      timestamp: "2024-07-18 12:30:00",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">System Alarms</h1>
      <div className="overflow-y-auto max-h-96">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Message
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Timestamp
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {alerts.map((alert) => (
              <tr key={alert.id}>
                <td className="px-6 py-4 whitespace-nowrap">{alert.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{alert.message}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {alert.timestamp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alarms;
