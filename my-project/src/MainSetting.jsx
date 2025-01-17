// import Header from "./components/header/Header";

import { Outlet } from "react-router";
import Settings from "./components/setting/Settings";
const MainApp = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="flex gap-2 ">
        <Settings />
        <div className="mt-16 ml-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainApp;
