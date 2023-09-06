import React, { useContext } from "react";
import Header from "../component/Header";
import Slider from "../component/Slider";
import Homegroup from "../component/group/Homegroup";
import { ThemeContext } from "../context/global";
import { Toaster } from "react-hot-toast";

function Home() {
  const { open } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`min-[1600px]:w-[1400px]  min-[1600px]:mx-[50%] min-[1600px]:translate-x-[-50%]
         ${open ? "h-screen overflow-hidden" : ""}`}
      >
        <Header />
        <Slider />
        <Homegroup />
        <Toaster />
      </div>
    </>
  );
}
export default Home;
