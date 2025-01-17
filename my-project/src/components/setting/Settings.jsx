import React from "react";
import { NavLink } from "react-router-dom";

const Settings = () => {
  return (
    <div className="w-full h-full  bg-white p-4">
      <h1 className="text-[#444753] font-bold text-[30px]">Settings</h1>
      <div className="w-[260px] h-[220px] rounded-lg bg-[#F3F6FF] mt-3">
        <ul className="text-[#71788E] font-Montserrat text-[14px] p-3">
          <li className="h-[48px] cursor-pointer flex items-center px-4 rounded-lg transition-all duration-200 ease-in-out hover:bg-white hover:text-[#6968EC]">
            General
          </li>
          <li className=" h-[48px] cursor-pointer flex items-center px-4 rounded-lg transition-all duration-200 ease-in-out hover:bg-white hover:text-[#6968EC]">
            Password
          </li>
          <li className="h-[48px] cursor-pointer flex items-center px-4 rounded-lg transition-all duration-200 ease-in-out hover:bg-white hover:text-[#6968EC]">
            Price
          </li>

          <NavLink
            to="/app/Treatments"
            className={({ isActive }) =>
              isActive
                ? "h-[48px] cursor-pointer flex items-center px-4 rounded-lg bg-white text-[#6968EC]"
                : "h-[48px] cursor-pointer flex items-center px-4 rounded-lg transition-all duration-200 ease-in-out hover:bg-[#F2F5FF] hover:text-[#6968EC]"
            }
          >
            Treatments
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Settings;
