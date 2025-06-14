import { useState } from "react";
import Warning from "./Warning";

function TextArea({ text, setText }) {

  const [warningText, setWarningText] = useState("");
  const handleChange = (event) => {
    let newText = event.target.value;
    if (newText.includes("<script>")) {
      newText = newText.replace("<script>", "");
      setWarningText("Script tags are not allowed.");
    }else if(newText.includes('@')) {
        newText = newText.replace('@', "");
        setWarningText("The '@' character is not allowed.");
    }else {
        setWarningText("");
    }
    setText(newText);
  };
  return (
    <div className="textarea">
      <textarea value={text} onChange={handleChange} spellCheck="false" />
      {warningText && 
        <Warning message={warningText} />
      }
    </div>
  );
}

export default TextArea;
