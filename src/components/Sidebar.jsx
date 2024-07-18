"use client";
import { Bell, Home, Settings2, UserCog, Wrench } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  // Function to determine if a link is active
  const isActive = (href) => {
    if (href === "/") {
      return pathname === href ? "bg-gray-900" : "bg-blue-900";
    }
    return pathname.startsWith(href) ? "bg-gray-900" : "bg-blue-900";
  };

  return (
    <div className="w-36 h-full bg-[#0a1c66] text-white flex flex-col items-center justify-between p-2">
      <div className="flex flex-col space-y-2 py-2">
        <Link href="/">
          <button
            className={`flex flex-col items-center justify-center p-2 border-2 border-gray-200 w-full rounded-lg ${isActive(
              "/"
            )}`}
          >
            <Home className="h-8 w-8" />
            <span className="ml-2">HOME</span>
          </button>
        </Link>
        <Link href="/Settings">
          <button
            className={`flex flex-col items-center justify-center p-2 border-2 border-gray-200 w-full rounded-lg ${isActive(
              "/Settings"
            )}`}
          >
            <Settings2 className="h-8 w-8" />
            <span className="ml-2">SETTINGS</span>
          </button>
        </Link>
        <Link href="/Setup">
          <button
            className={`flex flex-col items-center justify-center p-2 border-2 border-gray-200 w-full rounded-lg ${isActive(
              "/Setup"
            )}`}
          >
            <Wrench className="h-8 w-8" />
            <span className="ml-2">SET-UP</span>
          </button>
        </Link>
        <Link href="/Service">
          <button
            className={`flex flex-col items-center justify-center p-2 border-2 border-gray-200 w-full rounded-lg ${isActive(
              "/Service"
            )}`}
          >
            <UserCog className="h-8 w-8" />
            <span className="ml-2">SERVICE</span>
          </button>
        </Link>
        <Link href="/Alarms">
          <button
            className={`flex flex-col items-center justify-center p-2 border-2 border-gray-200 w-full rounded-lg ${isActive(
              "/Alarms"
            )}`}
          >
            <Bell className="h-8 w-8" />
            <span className="ml-2">ALARMS</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
