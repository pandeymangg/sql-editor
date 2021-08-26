import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useAppContext } from "../../contexts/AppContext";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { ImDatabase } from "react-icons/im";
import classes from "./styles.module.css";

const Header = () => {
  const { querySideBarCollapsed, setQuerySideBarCollapsed } = useAppContext();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <nav className="border-b-2 border-gray-200 dark:border-darkBorder px-4 md:px-20 h-14 flex items-center mx-auto my-0">
      <div className="nav-container w-full flex justify-between items-center">
        <div className="flex text-gray-900 dark:text-hotPink gap-2 items-center">
          <ImDatabase size={"1.2rem"} />
          <h1 className="text-xl md:text-3xl font-bold">SQL EDITOR</h1>
        </div>

        <div>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 text-gray-800 dark:text-gray-200"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
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
