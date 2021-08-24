import React, { useState } from "react";
import { AiOutlineCode } from "react-icons/ai";
import { queryData } from "../../../../data";
import Result from "./Result";

const MainQueryResult = ({
  queriesState,
  setQueriesState,
  currentQuery,
  setCurrentQuery,
}) => {
  // const {querySideBarCollapsed, setQuerySideBarCollapsed} = useAppContext()

  const [result, setResult] = useState();
  const handleQueriesChange = () => {
    let data = queryData.filter((element) => element.query === currentQuery);
    let queries = [currentQuery, ...queriesState];
    queries = [...new Set(queries)];

    if (data.length) {
      data = data[0].result;
      setQueriesState(queries);
      setResult(data);
    }
  };

  return (
    <div className="flex-1 bg-white py-4 overflow-auto">
      <div className="h-full w-full flex flex-col px-4 md:px-12 mx-auto">
        <div className="flex flex-col w-full h-full">
          <span className="text-2xl text-gray-900 font-bold mb-4">
            Execute SQL Query
          </span>

          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
            <div className="relative flex flex-col md:flex-row w-full">
              <span className="z-10 h-full leading-snug font-normal text-center absolute bg-transparent rounded text-base flex items-center justify-center w-8 pl-3 py-3">
                <AiOutlineCode />
              </span>
              <input
                value={currentQuery}
                type="text"
                placeholder="Write SQL query here..."
                className="px-3 py-3 placeholder-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring ring-primary w-full pl-10"
                onChange={(e) => setCurrentQuery(e.target.value)}
              />
            </div>
            <button
              className="bg-primary text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => handleQueriesChange()}
            >
              Execute!
            </button>
          </div>

          <div className="w-full h-full flex flex-col justify-center">
            {result && (
              <div className="w-full h-full overflow-scroll">
                <Result result={result} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainQueryResult;
