import React, { useEffect, useState } from "react";
import MainQueryResult from "../Layout/MainQueryResult";
import QuerySidebar from "../Layout/QuerySidebar";
import { queries } from "../../../data";

const Home = () => {
  const [queriesState, setQueriesState] = useState(queries);
  const [currentQuery, setCurrentQuery] = useState();

  return (
    <div
      className="lecture_page_layout flex flex-col md:flex-row w-full border-t-2 border-gray-200"
      style={{ minHeight: "unset", height: "calc(100vh - 3.5rem)" }}
    >
      <QuerySidebar queries={queriesState} setCurrentQuery={setCurrentQuery} />
      <MainQueryResult
        queriesState={queriesState}
        setQueriesState={setQueriesState}
        currentQuery={currentQuery}
        setCurrentQuery={setCurrentQuery}
      />
    </div>
  );
};

export default Home;
