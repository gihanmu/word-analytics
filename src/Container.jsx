import { useState } from "react";
import Stats from "./Stats"
import TextArea from "./TextArea"

function Container() {
    const [text, setText] = useState("");
    const noOfCharacters = text.length;
  return (
    <main className="container">
        <TextArea text={text} setText={setText} />
        <Stats noOfCharacters={noOfCharacters} />
    </main>
  )
}

export default Container