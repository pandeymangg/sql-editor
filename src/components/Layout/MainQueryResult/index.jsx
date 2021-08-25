import React, { useState } from "react";
import { queryData } from "../../../../data";
import Result from "./Result";
import { BsPlayFill, BsX } from "react-icons/bs";
import dynamic from "next/dynamic";
const CodeMirror = dynamic(import("../../CodeMirror"), { ssr: false });

const MainQueryResult = ({
  queriesState,
  setQueriesState,
  currentQuery,
  setCurrentQuery,
}) => {
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
          <span className="text-xl md:text-2xl text-gray-900 font-bold mb-4">
            Execute SQL Query
          </span>

          <div className="flex flex-col gap-4 mb-4">
            <CodeMirror value={currentQuery} setValue={setCurrentQuery} />
            <div className="editor-controls flex gap-4">
              <button
                className="bg-primary text-white font-bold uppercase text-xs md:text-sm px-3 py-2 md:px-6 md:py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none"
                type="button"
                onClick={() => handleQueriesChange()}
              >
                <div className="flex items-center gap-2">
                  <BsPlayFill size={"1.2rem"} />
                  <p>Run</p>
                </div>
              </button>

              <button
                className="bg-red-700 text-white font-bold uppercase text-xs md:text-sm px-3 py-2 md:px-6 md:py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none"
                type="button"
                onClick={() => {
                  setCurrentQuery();
                  setResult();
                }}
              >
                <div className="flex items-center gap-2">
                  <BsX size={"1.2rem"} />
                  <p>Clear</p>
                </div>
              </button>
            </div>
          </div>

          <div className="w-full overflow-auto">
            {result && <Result result={result} />}
          </div>

          {!result && (
            <div className="flex md:hidden">
              <p className="font-semibold text-gray-900 text-base text-center">
                Click the little down arrow in the header to open the sample
                queries menu, you can select any query from that menu!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainQueryResult;
