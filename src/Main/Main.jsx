import React from "react";
import Navbar from "../components/Home/Home/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Home/Home/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
