import React, { useState } from "react";
import { randomJoke } from "./jokes";

export default function Card() {
  const [joke, setJoke] = useState(randomJoke());

  function skip() {
    setJoke(randomJoke(joke.id));
  }

  return (
    <div>
      <div className="card">
        <p data-testid="joke">{joke.content}</p>
      </div>
      <div className="footer">
        <button onClick={() => skip()}>🤣🤣🤣</button>
      </div>
    </div>
  );
}
