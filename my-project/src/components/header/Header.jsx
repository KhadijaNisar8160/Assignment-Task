import logo from "../../../public/images/Logo1.png";
import search from "../../../public/images/search.png";
import notification from "../../../public/images/notification.png";
import user from "../../../public/images/user.png";
import vector from "../../../public/images/vector.png";
const Header = () => {
  return (
    <div className="w-full h-[76px] bg-[#F9F9FB] flex justify-between items-center px-6">
      <img src={logo} className="w-[150px] h-[23px]" />
      <div className="w-[460px] h-[48px] rounded-lg flex flex-row justify-start items-center border border-[#DADAFC] px-3 gap-x-2">
        <img src={search} className="w-[20px] h-[20px]" />

        <input
          type="Search"
          className="outline-none bg-[#F9F9FB] w-[350px] "
          placeholder="Search"
        />
      </div>

      <div className="flex flex-row items-center gap-x-3">
        <img src={notification} className="w-[20px] h-[20px]" />
        <img src={user} className="w-[32px] h-[32px]" />
        <div className="flex flex-col">
          <h1 className="text-[#444753] font-Montserrat font-weight-400 text-[14px]">
            Tim Bouwman
          </h1>
          <h1 className="font-Montserrat font-weight-500 text-[11px] text-[#8F95A9]">
            Aēstec Amsterdam
          </h1>
        </div>
        <img src={vector} className="w-[10px] h-[5px]" />
      </div>
    </div>
  );
};

export default Header;
