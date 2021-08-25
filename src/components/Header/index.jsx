import React from "react";
import { useAppContext } from "../../contexts/AppContext";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import classes from "./styles.module.css";

const Header = () => {
  const { querySideBarCollapsed, setQuerySideBarCollapsed } = useAppContext();
  return (
    <nav className="border-b-2 border-gray-200 px-4 md:px-20 h-14 flex items-center mx-auto my-0 bg-white">
      <div className="nav-container w-full flex justify-between md:justify-center items-center">
        <h1 className="text-xl md:text-3xl font-bold">SQL Editor</h1>

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
