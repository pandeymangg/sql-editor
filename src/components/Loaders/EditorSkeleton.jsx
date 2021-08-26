import React from "react";
import Skeleton from "react-loading-skeleton";

const EditorSkeleton = () => {
  return (
    <Skeleton
      className="border-4 border-gray-100 rounded-md w-full"
      style={{ height: "30vh" }}
    ></Skeleton>
  );
};

export default EditorSkeleton;
