import { Outlet } from "react-router";

import Treatments from "./components/treatments/Treatments";
const MainApp = () => {
  return (
    <div>
      <div className="flex gap-2 ">
        <Treatments />

        <Outlet />
      </div>
    </div>
  );
};

export default MainApp;
