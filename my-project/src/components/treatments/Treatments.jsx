import { NavLink } from "react-router-dom";

const Treatments = () => {
  return (
    <div>
      <h1 className="font-bold text-[#3E4147] text-[20px]">Treatments</h1>
      <div>
        <ul className="w-[240px] h-[220px] text-[#71788E] font-Montserrat text-[14px] py-3">
          <li className="h-[48px] cursor-pointer flex items-center px-4 rounded-lg transition-all duration-200 ease-in-out hover:bg-[#F2F5FF] hover:text-[#6968EC]">
            Injectables
          </li>
          <NavLink
            to="/app/Treatments/SkinImprovements"
            className={({ isActive }) =>
              isActive
                ? "h-[48px] cursor-pointer flex items-center px-4 rounded-lg bg-[#F2F5FF] text-[#6968EC]"
                : "h-[48px] cursor-pointer flex items-center px-4 rounded-lg transition-all duration-200 ease-in-out hover:bg-[#F2F5FF] hover:text-[#6968EC]"
            }
          >
            Skin improvement
          </NavLink>
          <li className="h-[48px] cursor-pointer flex items-center px-4 rounded-lg transition-all duration-200 ease-in-out hover:bg-[#F2F5FF] hover:text-[#6968EC]">
            Hair removal
          </li>
          <li className="h-[48px] cursor-pointer flex items-center px-4 rounded-lg transition-all duration-200 ease-in-out hover:bg-[#F2F5FF] hover:text-[#6968EC]">
            Soft surgery
          </li>
          <li className="h-[48px] cursor-pointer flex items-center px-4 rounded-lg transition-all duration-200 ease-in-out hover:bg-[#F2F5FF] hover:text-[#6968EC]">
            Plastic surgery
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Treatments;
