import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/sql/sql";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/duotone-light.css";
import "codemirror/theme/ttcn.css";
import "codemirror/theme/eclipse.css";
import "codemirror/keymap/sublime";

const Editor = (props) => (
  <div
    className="border-4 border-gray-100 rounded-md w-full"
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
        theme: "eclipse",
        keyMap: "sublime",
      }}
      onChange={(_, __, value) => {
        props.setValue(value);
      }}
    />
  </div>
);

export default Editor;
