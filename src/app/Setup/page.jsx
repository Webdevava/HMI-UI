import React from "react";
import Link from "next/link";

const Setup = () => {
  return (
    <div className="grid grid-cols-2 gap-4 h-full p-4">
      <Link
        className="bg-gray-400 text-black rounded-lg font-bold flex items-center justify-center text-lg p-4" href="/Setup/parameter-thresholds">
       
          Parameter Thresholds
    
      </Link>
      <Link
        className="bg-gray-400 text-black rounded-lg font-bold flex items-center justify-center text-lg p-4" href="/Setup/real-time-monitoring">
        
          Real-time Monitoring
        
      </Link>
      <Link
        className="bg-gray-400 text-black rounded-lg font-bold flex items-center justify-center text-lg p-4" href="/Setup/data-logging-frequency">
       
          Data Logging Frequency

      </Link>
      <Link
        className="bg-gray-400 text-black rounded-lg font-bold flex items-center justify-center text-lg p-4" href="/Setup/alert-severity-levels">

          Alert Severity Levels

      </Link>
      <Link
        className="bg-gray-400 text-black rounded-lg font-bold flex items-center justify-center text-lg p-4"
        href="/Setup/system-diagnostics"
      >

          System Diagnostics

      </Link>
    </div>
  );
};

export default Setup;
