import React from "react";

const SoftwareUpdates = () => {
  return (
    <div>
      <h1>Software Updates Page</h1>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
           
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Version
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Release Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              1.2.0
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              July 15, 2024
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Addresses critical security vulnerabilities.
            </td>
          </tr>
          <tr>
            
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              2.0.0
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              July 1, 2024
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Introduces new features and improvements.
            </td>
          </tr>
          <tr>
            
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              1.1.1
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              June 20, 2024
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Resolves known issues and improves stability.
            </td>
          </tr>
          {/* Add more rows for additional updates */}
        </tbody>
      </table>
    </div>
  );
};

export default SoftwareUpdates;
