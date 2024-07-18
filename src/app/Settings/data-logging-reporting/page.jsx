import React from "react";

const DataLoggingReporting = () => {
  return (
    <div>
      <h1>Data Logging and Reporting Page</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Event Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                2024-07-20
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Error
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Disk space exceeded threshold.
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">
                Resolved
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                2024-07-19
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Warning
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                High CPU usage detected.
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-500">
                In Progress
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                2024-07-18
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Error
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Database connection lost.
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">
                Critical
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataLoggingReporting;
