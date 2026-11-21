import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import "./RootLayout.css";

const RootLayout = () => {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
