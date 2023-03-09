import "./App.css";
import { useState } from "react";

function MeaningContainerBlock({ word, result = null }) {
  let isExist = result === null ? false : result.title ? false : true;

  return (
    <>
      <p className="info-text" style={{ display: !isExist ? "block" : "none" }}>
        Type a word and press enter
      </p>
      <div className="meaning-container" style={{ display: "block" }}>
        <p>
          Word Title:
          {<span className="title">{!isExist ? word : result[0].word}</span>}
        </p>
        <p>
          Meaning:
          <span className="meaning">
            {!isExist ? "N/A" : result[0].meanings[0].definitions[0].definition}
          </span>
          <br />
          <br />
          <audio
            src={!isExist ? "" : result[0].phonetics[0].audio}
            controls
            style={{
              display: !isExist ? "none" : "inline-flex",
            }}
          ></audio>
        </p>
      </div>
    </>
  );
}

function InputSearch() {
  const [result, setResult] = useState(null);
  const [word, setWord] = useState("");

  function getWord(e) {
    if (e.target.value && e.key === "Enter") {
      fetchAPI(e.target.value);
    }
  }

  async function fetchAPI(word) {
    try {
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      const result = await fetch(url).then((res) => res.json());
      setResult(result);
      setWord(word);
    } catch (error) {
      console.log("Here is error: " + error);
    }
  }

  return (
    <>
      <input
        type="text"
        className="input"
        id="input"
        placeholder="Search a word"
        onKeyUp={getWord}
      ></input>
      <MeaningContainerBlock word={word} result={result} />
    </>
  );
}

function App() {
  return (
    <div className="container">
      <h1 className="heading">English Dictionary</h1>
      <InputSearch></InputSearch>
    </div>
  );
}

export default App;
