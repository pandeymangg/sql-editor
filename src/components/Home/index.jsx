import React from "react";
import MainQueryResult from "../Layout/MainQueryResult";
import QuerySidebar from "../Layout/QuerySidebar";

const Home = () => {
  const headerList = [
    {
      title: "Getting Started",
    },
    {
      title: "Django Fundamentals (45m)",
    },
    {
      title: "Building a Data Model (45m)",
    },
    {
      title: "Setting Up the Database (40m)",
    },
    {
      title: "Django ORM (100m)",
    },
    {
      title: "The Admin Site (1h)",
    },
  ];

  return (
    <div
      className="lecture_page_layout flex flex-col md:flex-row w-full border-t-2 border-gray-200 scrollbar-hidden overflow-auto"
      style={{ minHeight: "unset", height: "calc(100vh - 5rem)" }}
    >
      <QuerySidebar headerList={headerList} />
      <MainQueryResult />
    </div>
  );
};

export default Home;
