import { useState } from "react";
import dashboard from "../../../public/images/dashboard.png";
import inbox from "../../../public/images/inbox.png";
import calendar from "../../../public/images/calendar.png";
import review from "../../../public/images/comment.png";
import settings from "../../../public/images/settings.png";
import logout from "../../../public/images/logout.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const iconForOption1 = selectedOption === "option1" ? settings : settings;

  return (
    <div className="w-[96px] h-[526px] bg-[#F9F9FB]">
      {" "}
      {/* Set navbar height */}
      <ul className="px-3">
        <div className="flex flex-col items-center gap-y-4 cursor-pointer">
          <img src={dashboard} className="w-[24px] h-[24px] mt-5" />
          <li className="gap-y-2 font-Montserrat font-weight-500 text-[#8F95A9] text-[9px]">
            DASHBOARD
          </li>
        </div>
        <div className="flex flex-col items-center gap-y-2 cursor-pointer relative">
          <div className="absolute top-2 right-3 bg-[#F88080] text-white rounded-full h-[20px] w-[20px] flex items-center justify-center text-[12px]">
            2
          </div>

          <img src={inbox} className="w-[24px] h-[24px] mt-5" />

          <li className="gap-y-2 font-Montserrat font-weight-500 text-[#8F95A9] text-[9px]">
            INBOX
          </li>
        </div>

        <div className="flex flex-col items-center gap-y-2 cursor-pointer">
          <img src={calendar} className="w-[24px] h-[24px] mt-5" />
          <li className="gap-y-2 font-Montserrat font-weight-500 text-[#8F95A9] text-[9px]">
            SCHEDULE
          </li>
        </div>
        <div className="flex flex-col items-center gap-y-2 cursor-pointer relative">
          <div className="absolute top-2 right-3 bg-[#F88080] text-white rounded-full h-[20px] w-[20px] flex items-center justify-center text-[12px]">
            6
          </div>
          <img src={review} className="w-[24px] h-[24px] mt-5" />
          <li className="gap-y-2 font-Montserrat font-weight-500 text-[#8F95A9] text-[9px]">
            REVIEWS
          </li>
        </div>
        <NavLink
          to="/Settings"
          className={`cursor-pointer rounded-lg mt-2 ${
            selectedOption === "option1"
              ? "bg-white text-[#6968EC] "
              : "text-[#8F95A9] bg-[#F9F9FB]"
          }`}
          onClick={() => handleOptionClick("option1")}
        >
          <div
            className={`flex flex-col items-center gap-y-2 ${
              selectedOption === "option1" ? "bg-white py-3 mt-2" : ""
            }`}
          >
            <img src={iconForOption1} className="w-[24px] h-[24px]  " />
            <li
              className={`font-Montserrat font-weight-500 text-[9px] ${
                selectedOption === "option1"
                  ? "text-[#6968EC]"
                  : "text-[#8F95A9]"
              }`}
            >
              SETTINGS
            </li>
          </div>
          <span
            className={`ml-2 text-[10px] md:text-lg font-bold  md:w-28 ${
              selectedOption === "option1" ? "text-[#1d5a61]" : "text-gray-600"
            }`}
          ></span>
        </NavLink>

        <div className="flex flex-col items-center gap-y-2 cursor-pointer mt-24">
          <img src={logout} className="w-[24px] h-[24px]" />
          <li className="gap-y-2 font-Montserrat font-weight-500 text-[#8F95A9] text-[9px]">
            LOGOUT
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
