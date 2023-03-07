import "./App.css";
import { useState } from "react";

function JokeButton({ children }) {
  const [joke, setJoke] = useState("Let's have a funny joke!!!");

  async function getJoke() {
    const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";
    const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
    const option = {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
      },
    };

    try {
      const response = await fetch(apiUrl, option);
      const data = await response.json();
      setJoke(data[0].joke);
    } catch (error) {
      console.log("Dad Joke Generator " + error);
      setJoke("An error happened, try again later");
    }
  }

  return (
    <>
      <p className="joke">{joke}</p>
      <button className="btn" onClick={getJoke}>
        {children}
      </button>
    </>
  );
}

function App() {
  return (
    <div className="container">
      <h1 className="heading">Dad Joke Generator</h1>
      <JokeButton>Tell me a joke</JokeButton>
    </div>
  );
}

export default App;
