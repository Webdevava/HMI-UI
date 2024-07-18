import React from "react";

const Header = () => (
  <div className="flex text-white justify-evenly gap-1">
    <button className="flex-1 p-2 border-2 border-gray-200 bg-[#1633aa] rounded-lg">
      Program
    </button>
    <button className="flex-1 p-2 border-2 border-gray-200 bg-[#1633aa] rounded-lg">
      Process
    </button>
    <button className="flex-1 p-2 border-2 border-gray-200 bg-[#1633aa] rounded-lg">
      Data
    </button>
    <button className="flex-1 p-2 border-2 border-gray-200 bg-[#1633aa] rounded-lg">
      Info
    </button>
    <button className="flex-1 p-2 border-2 border-gray-200 bg-[#1633aa] rounded-lg">
      Save data
    </button>
    <button className="flex-1 p-2 border-2 border-gray-200 bg-[#1633aa] rounded-lg">
      Copy data
    </button>
  </div>
);

export default Header;
