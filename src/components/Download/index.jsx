import React from "react";
import { BsDownload } from "react-icons/bs";

const Download = ({ result }) => {
  const generateCSV = () => {
    let csvfile = "data:text/csv;charset=utf-8,";
    const keys = Object.keys(result[0]);
    csvfile += keys.join(",");
    csvfile += "\n";

    result.forEach((res) => {
      let properties = Object.values(res);
      csvfile += properties.join(",");
      csvfile += "\n";
    });

    const encodedUri = encodeURI(csvfile);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "result.csv");
    document.body.appendChild(link);
    link.click();
  };

  const onDownload = () => {
    generateCSV();
  };

  return (
    <div className="w-full flex justify-between items-end mb-2 md:mb-0">
      <div>
        <h3 className="text-lg font-medium">OUTPUT</h3>
      </div>

      <div
        className="cursor-pointer flex items-center rounded-md hover:shadow-md hover:scale-110 px-5 py-1 bg-[#eee] dark:bg-[#333]"
        onClick={() => onDownload()}
      >
        <BsDownload size={"1.2rem"} />
        <p className="ml-2 text-base font-medium text-gray-900 dark:text-gray-50">
          Export
        </p>
      </div>
    </div>
  );
};

export default Download;
