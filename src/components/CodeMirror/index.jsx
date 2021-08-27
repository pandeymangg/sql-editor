import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/sql/sql";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/duotone-light.css";
import "codemirror/theme/ttcn.css";
import "codemirror/theme/eclipse.css";
import "codemirror/theme/dracula.css";
import "codemirror/keymap/sublime";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Editor = (props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  return (
    <div
      className="border-4 border-gray-100 dark:border-darkBorder rounded-md w-full"
      style={{ height: "30vh" }}
    >
      <CodeMirror
        className="w-full h-full text-sm sm:text-base shadow-md overflow-hidden"
        {...props}
        value={props.value}
        options={{
          mode: "sql",
          lineNumbers: true,
          // theme: "duotone-light",
          theme: theme === "light" ? "eclipse" : "dracula",
          keyMap: "sublime",
        }}
        onChange={(_, __, value) => {
          props.setValue(value);
        }}
        name="editor"
      />
    </div>
  );
};

export default Editor;
