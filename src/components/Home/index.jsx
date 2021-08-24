import React, { useState } from "react";
import MainQueryResult from "../Layout/MainQueryResult";
import QuerySidebar from "../Layout/QuerySidebar";
import { queries } from "../../../data";

const Home = () => {
  const [querieState, setQuerieState] = useState(queries);

  return (
    <div
      className="lecture_page_layout flex flex-col md:flex-row w-full border-t-2 border-gray-200 scrollbar-hidden overflow-auto"
      style={{ minHeight: "unset", height: "calc(100vh - 5rem)" }}
    >
      <QuerySidebar queries={querieState} />
      <MainQueryResult />
    </div>
  );
};

export default Home;
