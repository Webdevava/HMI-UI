import { CircleUser, User, UserRound } from "lucide-react";
import React from "react";

const Footer = () => (
  <div className="flex bg-[#1633aa] text-white p-2 mb">
    <div className="flex flex-[2]">
      <button className="flex-1 bg-[#3f9e56] text-white p-4 mx-2 rounded-lg">
        START
      </button>
      <button className="flex-1 bg-red-500 text-white p-4 mx-2 rounded-lg ">
        STOP
      </button>
    </div>
    <div className="flex items-center justify-center gap-2 flex-[1]">

        <CircleUser fill="#333a" size={36} />

      <span>Username</span>
    </div>
  </div>
);

export default Footer;
