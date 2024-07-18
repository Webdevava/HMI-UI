import React from "react";

const AdvancedSettings = () => {
  return (
    <div>
      <h1>Advanced Settings Page</h1>

      <div className="mt-4">
        <h2 className="text-lg font-bold mb-2">System Preferences</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <span className="font-bold mr-2">Language:</span> English
          </div>
          <div className="flex items-center">
            <span className="font-bold mr-2">Time Zone:</span> UTC+0
          </div>
          <div className="flex items-center">
            <span className="font-bold mr-2">Theme:</span> Light
          </div>
          <div className="flex items-center">
            <span className="font-bold mr-2">Notification Preferences:</span>{" "}
            Email, SMS
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold mb-2">Security Settings</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <span className="font-bold mr-2">Password Expiry:</span> 90 days
          </div>
          <div className="flex items-center">
            <span className="font-bold mr-2">Two-Factor Authentication:</span>{" "}
            Enabled
          </div>
          <div className="flex items-center">
            <span className="font-bold mr-2">Access Control:</span> Role-based
          </div>
          <div className="flex items-center">
            <span className="font-bold mr-2">Encryption:</span> AES-256
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSettings;
