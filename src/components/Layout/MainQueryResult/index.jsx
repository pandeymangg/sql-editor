import React, { useState } from "react";
import { queryData } from "../../../../data";
import Result from "./Result";
import dynamic from "next/dynamic";
const CodeMirror = dynamic(import("../../CodeMirror"), { ssr: false });

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
      <div className="w-full flex flex-col px-4 md:px-12 mx-auto">
        <div className="flex flex-col w-full h-full">
          <span className="text-2xl text-gray-900 font-bold mb-4">
            Execute SQL Query
          </span>

          <div className="flex flex-col gap-4 mb-4">
            <div className="relative flex flex-col md:flex-row w-full">
              <CodeMirror value={currentQuery} setValue={setCurrentQuery} />
            </div>
            <button
              className="bg-primary w-40 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => handleQueriesChange()}
            >
              Execute!
            </button>
          </div>

          <div className="w-full overflow-auto">
            {result && <Result result={result} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainQueryResult;
