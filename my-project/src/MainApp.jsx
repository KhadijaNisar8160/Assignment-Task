import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router";
const MainApp = () => {
  return (
    <div>
      <Header />
      <div className="flex gap-2 ">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainApp;
