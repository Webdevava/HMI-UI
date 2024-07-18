import React from "react";

const FilterSettings = () => {
  return (
    <div>
      <h1>Filter Settings Page</h1>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Setting
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Value
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Filter Type
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Sand Filter
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Type of filtration media used in the filter.
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Flow Rate
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              5000 gallons per hour
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Rate at which water flows through the filter.
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Pressure
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              30 psi
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Operating pressure within the filter.
            </td>
          </tr>
          {/* Add more rows for additional settings */}
        </tbody>
      </table>
    </div>
  );
};

export default FilterSettings;
