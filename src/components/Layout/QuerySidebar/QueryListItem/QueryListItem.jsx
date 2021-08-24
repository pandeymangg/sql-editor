import { BiPlayCircle } from "react-icons/bi";

export const QueryListItem = ({ query }) => {
  return (
    <div className="p-4 cursor-pointer flex items-center border-b-2 border-gray-200 hover:scale-105 hover:shadow-lg">
      <div className="flex gap-2 items-center px-2">
        <div className="text-[#228B22]">
          <BiPlayCircle size={"1.5rem"} />
        </div>
        <p className="text-lg font-medium">
          <code>{query}</code>
        </p>
      </div>
    </div>
  );
};
