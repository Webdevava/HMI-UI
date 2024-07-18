import React from "react";

const SystemConfiguration = () => {
  return (
    <div>
      <h1>System Configuration Page</h1>

      <div className="mt-4">
        <h2 className="text-lg font-bold mb-2">General Settings</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <span className="font-bold mr-2">System Name:</span> MySystem
          </div>
          <div className="flex items-center">
            <span className="font-bold mr-2">System Version:</span> 1.0.0
          </div>
          <div className="flex items-center">
            <span className="font-bold mr-2">System Status:</span> Operational
          </div>
          <div className="flex items-center">
            <span className="font-bold mr-2">Last Update:</span> 2024-07-20
            10:00 AM
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold mb-2">Network Settings</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <span className="font-bold mr-2">IP Address:</span> 192.168.1.100
          </div>
          <div className="flex items-center">
            <span className="font-bold mr-2">Subnet Mask:</span> 255.255.255.0
          </div>
          <div className="flex items-center">
            <span className="font-bold mr-2">Gateway:</span> 192.168.1.1
          </div>
          <div className="flex items-center">
            <span className="font-bold mr-2">DNS Server:</span> 8.8.8.8, 8.8.4.4
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemConfiguration;
