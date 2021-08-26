import React, { useEffect, useState } from "react";
import { useAppContext } from "../../contexts/AppContext";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { ImDatabase } from "react-icons/im";
import classes from "./styles.module.css";

const Header = () => {
  const { querySideBarCollapsed, setQuerySideBarCollapsed } = useAppContext();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  return (
    <nav className="border-b-2 border-gray-200 px-4 md:px-20 h-14 flex items-center mx-auto my-0 bg-white">
      <div className="nav-container w-full flex justify-between md:justify-center items-center">
        <div className="flex gap-2 items-center">
          <ImDatabase size={"1.2rem"} />
          <h1 className="text-xl md:text-3xl font-bold">SQL EDITOR</h1>
          <button
            onClick={() => {
              theme === "light" ? setTheme("dark") : setTheme("light");
            }}
          >
            Toggle
          </button>
        </div>

        <div
          className={classes.sidebaricon}
          onClick={() => setQuerySideBarCollapsed(!querySideBarCollapsed)}
        >
          {querySideBarCollapsed ? (
            <RiArrowDropDownLine size={"2rem"} />
          ) : (
            <RiArrowDropUpLine size={"2rem"} />
          )}
        </div>

        {/* <div>
          <a
            className="text-gray-600 text-base font-medium hover:text-gray-900"
            href=""
          >
            GitHub
          </a>
        </div> */}
      </div>
    </nav>
  );
};

export default Header;
