import React from "react";
import Link from "next/link";

const Settings = () => {
  return (
    <div className="grid grid-cols-2 gap-4 h-full p-4">
      <Link
        className="bg-gray-400 text-black rounded-lg font-bold flex items-center justify-center text-lg p-4 "
        href="/Settings/filter-settings"
      >
        Filter Settings
      </Link>
      <Link
        className="bg-gray-400 text-black rounded-lg font-bold flex items-center justify-center text-lg p-4"
        href="/Settings/software-updates"
      >
        Software Updates
      </Link>
      <Link
        className="bg-gray-400 text-black rounded-lg font-bold flex items-center justify-center text-lg p-4"
        href="/Settings/data-logging-reporting"
      >
        Data Logging and Reporting
      </Link>
      <Link
        className="bg-gray-400 text-black rounded-lg font-bold flex items-center justify-center text-lg p-4"
        href="/Settings/connectivity"
      >
        Connectivity
      </Link>
      <Link
        className="bg-gray-400 text-black rounded-lg font-bold flex items-center justify-center text-lg p-4"
        href="/Settings/system-configuration"
      >
        System Configuration
      </Link>
      <Link
        className="bg-gray-400 text-black rounded-lg font-bold flex items-center justify-center text-lg p-4"
        href="/Settings/advanced-settings"
      >
        Advanced Settings
      </Link>
    </div>
  );
};

export default Settings;
