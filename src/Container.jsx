import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";

function Container() {
  const [text, setText] = useState("");
  const noOfWords = text.split(/\s+/).filter((word) => word.length > 0).length;
  const noOfCharacters = text.length;
  const noOfInstagramCharactersLeft = 280 - noOfCharacters;
  const noOfFacebookCharactersLeft = 2200 - noOfCharacters;
  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats
        noOfCharacters={noOfCharacters}
        noOfWords={noOfWords}
        noOfInstagramCharactersLeft={noOfInstagramCharactersLeft}
        noOfFacebookCharactersLeft={noOfFacebookCharactersLeft}
      />
    </main>
  );
}

export default Container;
