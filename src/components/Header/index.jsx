import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useAppContext } from "../../contexts/AppContext";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { ImDatabase } from "react-icons/im";
import classes from "./styles.module.css";
import ThemeToggler from "../ThemeToggler";

const Header = () => {
  const { querySideBarCollapsed, setQuerySideBarCollapsed } = useAppContext();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <nav className="border-b-2 border-gray-200 dark:border-darkBorder px-4 md:px-20 h-14 flex items-center mx-auto my-0">
      <div className="nav-container relative w-full flex justify-between items-center">
        <div className="flex text-gray-900 dark:text-hotPink gap-2 items-center">
          <ImDatabase size={"1.2rem"} />
          <h1 className="text-xl md:text-3xl font-bold">SQL EDITOR</h1>
        </div>

        <div className="hidden md:block">
          <ThemeToggler mounted={mounted} theme={theme} setTheme={setTheme} />
        </div>

        <div className={`${classes.sidebaricon} items-center gap-2`}>
          <div className="mt-1">
            <ThemeToggler mounted={mounted} theme={theme} setTheme={setTheme} />
          </div>
          <div onClick={() => setQuerySideBarCollapsed(!querySideBarCollapsed)}>
            {querySideBarCollapsed ? (
              <RiArrowDropDownLine size={"2rem"} />
            ) : (
              <RiArrowDropUpLine size={"2rem"} />
            )}
          </div>
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
