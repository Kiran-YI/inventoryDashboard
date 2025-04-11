// import { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { ROUTES } from "@/constant/ROUTES";
// import { Button } from "../components/ui/button";
// import { FiInfo } from "react-icons/fi";
// // import { FaPlus } from "react-icons/fa";
// import { FaAnglesUp, FaUserGroup } from "react-icons/fa6";
// // import { IoMdDoneAll } from "react-icons/io";
// // import { HiOutlineDotsHorizontal } from "react-icons/hi";
// // import { PiTagFill } from "react-icons/pi";

// const Sidebar = () => {
//   const [tabs, setTab] = useState("home");

//   return (
//     <div className=''>
//       <aside
//         id='sidebar'
//         className=' z-40 h-[95vh]  w-0 sm:w-full max-w-48  sm:block transition-transform'
//         aria-label='Sidebar'
//       >
//         <div className='flex justify-center bg-foreground text-muted rounded-1 p-3 mb-3 items-center'>
//           <p>KK</p>
//         </div>
//         <div className=' h-full flex-col hidden sm:flex overflow-y-auto border-r border-slate-200 bg-background px-3 py-4 dark:border-slate-700 '>
//           <ul className='space-y-2 mt-2 text-sm font-medium'>
//             <li>
//               <Link
//                 to={ROUTES.Dashboard.route}
//                 className='flex items-center rounded  px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700'
//               >
//                 <FiInfo className='text-xl' />

//                 <span className='ml-3 overflow-x-hidden  whitespace-nowrap'>
//                   Dashboard
//                 </span>
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to={"/users"}
//                 className='flex items-center rounded border-t px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700'
//               >
//                 <FaUserGroup className='text-xl' />
//                 <span className='ml-3 overflow-x-hidden  whitespace-nowrap'>
//                   Users
//                 </span>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </aside>
//     </div>
//   );
// };

// export default Sidebar;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiInfo } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { cn } from "@/lib/utils"; // if using classNames utility
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { HiOutlineLogout } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { ROUTES } from "./ROUTES";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true); // Final sidebar state
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const handleMouseEnter = () => {
    if (!isOpen) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isOpen) setIsHovered(false);
  };
  const handleToggleClick = () => {
    setIsCollapsed((prev) => !prev);
    setIsOpen((prev) => !prev); // manual click disables hover control
  };
  const sidebarOpen = !isCollapsed || isHovered || isOpen; // sidebarOpen state

  return (
    <aside
      className={cn(
        "h-screen max-h-screen transition-all duration-900 ease-in-out overflow-hidden",
        sidebarOpen ? "w-48" : "w-16",
        "bg-color-sidebar  text-color-sidebar-foreground border-r border-color-sidebar-border ",
        "flex flex-col"
      )}
    >
      <div className='flex flex-col   items-center justify-center'>
        {/* Logo or Brand Name */}
        <div className='flex items-center justify-center   rounded-1 p-3 mb-3'>
          <p 
            className={`text-lg text-wrap-none font-bold transition-all duration-900 ease-in-out whitespace-nowrap overflow-hidden text-ellipsis  transform ${
              sidebarOpen
                ? "opacity-50 scale-100 "
                : "opacity-95 scale-100 rounded-xl text-white p-2 bg-black"
            }`}
          >
            {!sidebarOpen ? "kk" : "kIRAN kUYATE"}
          </p>
        </div>
      </div>
      <div className='flex flex-col justify-between h-full'>
        {/* Navigation */}

        <nav
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex flex-col   gap-2 mt-4 ",
            sidebarOpen ? "px-4" : "px-2"
          )}
        >
          <Link
            to={ROUTES.Dashboard.route}
            className={cn(
              "group flex items-center px-4 py-2 rounded-md transition-colors hover:bg-muted-foreground   hover:text-sidebar-accent",
              location.pathname === ROUTES.Dashboard.route &&
                "bg-sidebar-accent-foreground   text-sidebar-accent "
            )}
          >
            <MdDashboard className='text-lg ' />
            {sidebarOpen && <span className='ml-3 '>Dashboard</span>}
          </Link>
          <Link
            to={ROUTES.Users.route}
            className={cn(
              "group flex items-center px-4 py-2 rounded-md transition-colors hover:bg-muted-foreground   hover:text-sidebar-accent",
              location.pathname === ROUTES.Users.route &&
                "bg-sidebar-accent-foreground   text-sidebar-accent "
            )}
          >
            <FaUser className='text-lg ' />
            {sidebarOpen && <span className='ml-3 '>Users</span>}
          </Link>
          {location.pathname === ROUTES.Users.route && (
            <div className='ml-4 mt-1 flex flex-col gap-1'>
              <Link
                to={ROUTES.Users.route}
                className={cn(
                  "group flex items-center  p-2 gap-2 rounded-md transition-colors hover:bg-muted-foreground   hover:text-sidebar-accent",
                  location.pathname === ROUTES.Users.route &&
                    "bg-sidebar-accent-foreground   text-sidebar-accent "
                )}
              >
                <FaUser className="text-sm" />
                {sidebarOpen && <span>Admins</span>}
              </Link>
              <Link
                to={ROUTES.Users.route}
                className={cn(
                  "group flex items-center p-2 gap-2 rounded-md transition-colors hover:bg-muted-foreground   hover:text-sidebar-accent",
                  location.pathname === ROUTES.Users.route &&
                    "bg-sidebar-accent-foreground   text-sidebar-accent "
                )}
              >
                    <FaUser className="text-sm" />
                    {sidebarOpen && <span>Customers</span>}
              </Link>
            </div>
          )}
        </nav>

        {/* Toggle Button */}
        <div
          className={cn(
            "flex flex-col gap-2 mb-4",
            sidebarOpen ? "px-4" : "px-2"
          )}
        >
          <div className='flex justify-end p-2 '>
            <button onClick={handleToggleClick}>
              <span className='text-sidebar-foreground text-2xl'>
                {sidebarOpen ? <GoSidebarExpand /> : <GoSidebarCollapse />}
              </span>
            </button>
          </div>
          <button
            onClick={handleToggleClick}
            className={cn(
              "group flex w-full items-center px-4 py-2 rounded-md transition-colors hover:bg-muted-foreground   hover:text-sidebar-accent",
              location.pathname === ROUTES.Auth.route &&
                "bg-sidebar-accent-foreground   text-sidebar-accent "
            )}
          >
            <span className='text-sidebar-foreground text-2xl'>
              <HiOutlineLogout />
            </span>
            {sidebarOpen && <span className='ml-3 '>Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  );
}
