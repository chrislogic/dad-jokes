import { useState } from "react";
import "./App.css";
import { randomJoke } from "./jokes";

function App() {
  const [joke, setJoke] = useState(randomJoke());
  return (
    <div className="App">
      <h1>Rate a joke</h1>
      <div className="card">
        <p>{joke.content}</p>
      </div>
      <div className="footer">
        <button onClick={() => setJoke(randomJoke())}>👍</button>
        <button onClick={() => setJoke(randomJoke())}>👎</button>
        <button onClick={() => setJoke(randomJoke())}>🔄</button>
      </div>
    </div>
  );
}

export default App;
