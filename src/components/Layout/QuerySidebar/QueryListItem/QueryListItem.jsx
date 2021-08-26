import { BiPlayCircle } from "react-icons/bi";
import { useAppContext } from "../../../../contexts/AppContext";

export const QueryListItem = ({ query, setCurrentQuery, phoneView }) => {
  const { querySideBarCollapsed, setQuerySideBarCollapsed } = useAppContext();
  return (
    <div
      className="p-4 cursor-pointer flex items-center border-b-2 border-gray-200 dark:border-darkBorder hover:scale-105 hover:shadow-lg"
      onClick={() => {
        setCurrentQuery(query);
        if (phoneView) {
          if (!querySideBarCollapsed) {
            setQuerySideBarCollapsed(true);
          }
        }
      }}
    >
      <div className="flex gap-2 items-center px-2">
        <div className="text-[#228B22]">
          <BiPlayCircle size={"1.5rem"} />
        </div>
        <p className="text-base leading-4 font-medium">
          <code>{query}</code>
        </p>
      </div>
    </div>
  );
};
