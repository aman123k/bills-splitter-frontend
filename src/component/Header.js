import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";
import ease from "../images/ease.png";

function Header() {
  const [opemMenu, setOpenMenu] = useState(false);
  return (
    <>
      <header
        className="py-3 px-5 bg-[#f3f3f3] border-b border flex items-center
       justify-between"
      >
        <div className="flex items-center">
          <img src={ease} alt="" className="h-8  mix-blend-normal" />
          <h1 className="text-xl tracking-wide font-semibold ">SplitEase</h1>
        </div>
        <HiMenuAlt4
          className="text-2xl cursor-pointer max-[550px]:block hidden"
          onClick={() => setOpenMenu(!opemMenu)}
        />
        <nav
          className={`max-[550px]:absolute top-14  max-[550px]:px-2 shadow-black 
         right-5 max-[550px]:bg-white z-50 drop-shadow-xl rounded-xl  max-[550px]:py-3.5
         ${opemMenu ? "max-[550px]:block " : "max-[550px]:hidden"} 
         `}
        >
          <ul className="flex gap-5 max-[550px]:flex-col max-[550px]:gap-2 max-[550px]:w-36">
            <Link to="/">
              <li
                className="cursor-pointer  max-[550px]:px-3 
             max-[550px]:tracking-wider rounded-lg max-[550px]:text-start"
              >
                Home
              </li>
            </Link>
            <Link to="/group">
              <li
                className="cursor-pointer  max-[550px]:px-3 
             max-[550px]:tracking-wider rounded-lg max-[550px]:text-start"
              >
                Group
              </li>
            </Link>
            <Link to="/bills">
              <li
                className="cursor-pointer  max-[550px]:px-3  
            max-[550px]:tracking-wider rounded-lg max-[550px]:text-start"
              >
                Bills
              </li>
            </Link>
            <Link to="/activity">
              <li
                className="cursor-pointer  max-[550px]:px-3 
             max-[550px]:tracking-wider rounded-lg max-[550px]:text-start"
              >
                Activitiy
              </li>
            </Link>
            <Link to="/account">
              <li
                className="cursor-pointer  max-[550px]:px-3 
             max-[550px]:tracking-wider rounded-lg max-[550px]:text-start"
              >
                Account
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
