import React from "react";
import { useAppContext } from "../../../contexts/AppContext";
import { QueryListItem } from "./QueryListItem/QueryListItem";
import classes from "./styles.module.css";

const QuerySidebar = ({ queries, setQueryIndex }) => {
  const { courseSideBarCollapsed } = useAppContext();

  return (
    <>
      <div
        className={`${classes.sidebardesktop} course_sidebar md:sticky overflow-auto px-0 h-full top-0 bg-white flex flex-col border-r-2 border-gray-200`}
      >
        <div className="course_sidebar_header w-full p-4 bg-gray-50">
          <h2 className="text-lg text-gray-900 font-semibold">
            Choose a query from the list below:
          </h2>
        </div>
        <div className="row_lecture_sidebar">
          <div className="w-full flex flex-col">
            {queries.map((query, index) => {
              return (
                <QueryListItem
                  key={index}
                  query={query}
                  setQueryIndex={setQueryIndex}
                  queryIndex={index}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={`${classes.sidebar} course_sidebar overflow-auto px-0 top-0 bottom-0 bg-white h-full flex flex-col border-r-2 border-gray-200`}
        style={{ height: courseSideBarCollapsed && 0 }}
      >
        <div className="course_sidebar_header w-full py-4 px-2 bg-gray-50">
          <h2 className="text-lg text-gray-900 text-center font-semibold">
            Choose a query from the list below:
          </h2>
        </div>
        <div className="row_lecture_sidebar">
          <div className="w-full flex flex-col">
            {queries.map((query, index) => {
              return <QueryListItem key={index} query={query} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuerySidebar;
