import React, { useState, useEffect } from "react";
import { queryData } from "../../../../data";
// import Result from "./Result";
import { BsPlayFill, BsX } from "react-icons/bs";
import dynamic from "next/dynamic";
import EditorSkeleton from "../../Loaders/EditorSkeleton";
import Download from "../../Download";
import ResultLoader from "../../Loaders/ResultLoader";
import toast, { Toaster } from "react-hot-toast";
import { useTheme } from "next-themes";
import { AiOutlineInfoCircle } from "react-icons/ai";

const CodeMirror = dynamic(import("../../CodeMirror"), {
  ssr: false,
  loading: () => <EditorSkeleton />,
});

const Result = dynamic(import("../MainQueryResult/Result"), {
  ssr: false,
  loading: () => <ResultLoader />,
});

const MainQueryResult = ({
  queriesState,
  setQueriesState,
  currentQuery,
  setCurrentQuery,
}) => {
  const [result, setResult] = useState();

  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  const handleQueriesChange = () => {
    let data = queryData.filter((element) => element.query === currentQuery);
    let queries = [currentQuery, ...queriesState];
    queries = [...new Set(queries)];

    if (data.length) {
      data = data[0].result;
      setQueriesState(queries);
      setTimeout(() => {
        setResult(data);
        const timeTaken = Math.round(Math.random() * 500);
        const icon = (
          <div className="text-blue-500">
            <AiOutlineInfoCircle size={"1.2rem"} />
          </div>
        );
        toast(
          () => (
            <span>
              Query successfully ran in{" "}
              <span
                className={`${
                  timeTaken < 300 ? "text-green-500" : "text-[#ff5722]"
                }`}
              >
                {timeTaken}
              </span>{" "}
              ms!
            </span>
          ),
          {
            icon,
            duration: 2000,
            position: "bottom-right",
          }
        );
      }, 500);
    } else {
      let bgColor;
      let textColor;
      if (mounted) {
        bgColor = theme === "light" ? "#333" : "#eee";
        textColor = theme === "light" ? "#eee" : "#333";
      }

      toast.error("Please select a query from the list!", {
        duration: 2000,
        style: {
          backgroundColor: bgColor || "#333",
          color: textColor || "#eee",
        },
      });
    }
  };

  return (
    <div className="flex-1 py-4 overflow-auto">
      <div className="w-full flex flex-col px-4 md:px-12 mx-auto">
        <div className="flex flex-col w-full h-full">
          <span className="text-xl md:text-2xl font-bold mb-4">
            Execute SQL Query
          </span>

          <div className="flex flex-col gap-4 mb-4">
            <CodeMirror value={currentQuery} setValue={setCurrentQuery} />
            <div className="editor-controls flex gap-4">
              <button
                className="bg-green-900 text-green-100 font-bold uppercase text-xs md:text-sm px-3 py-2 md:px-6 md:py-3 rounded shadow-sm hover:shadow-lg outline-none focus:outline-none"
                type="button"
                onClick={() => handleQueriesChange()}
              >
                <div className="flex items-center gap-1">
                  <BsPlayFill size={"1.2rem"} />
                  <p>Run</p>
                </div>
              </button>

              <button
                className="bg-red-700 text-red-100 font-bold uppercase text-xs md:text-sm px-3 py-2 md:px-6 md:py-3 rounded shadow-sm hover:shadow-lg outline-none focus:outline-none"
                type="button"
                onClick={() => {
                  setCurrentQuery();
                  setResult();
                }}
              >
                <div className="flex items-center gap-1">
                  <BsX size={"1.2rem"} />
                  <p>Clear</p>
                </div>
              </button>
            </div>
          </div>

          {result && <Download result={result} />}

          <Toaster />

          <div className="w-full overflow-auto">
            {result && <Result result={result} />}
          </div>

          {!result && (
            <div className="flex md:hidden">
              <p className="font-semibold text-base text-center">
                Click the little down arrow in the header to open the sample
                queries menu, you can select any query from that menu!
              </p>
            </div>
          )}

          {!result && (
            <div className="hidden md:flex">
              <p className="font-semibold text-base text-center">
                Choose a sample query from the sidebar, just clicking on a query
                will paste it in the editor and then you can run it!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainQueryResult;
