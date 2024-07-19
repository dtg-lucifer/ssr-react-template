import React from "react";
import "./styles/app.css";

const App = () => {
  const [state, setState] = React.useState(0);
  return (
    <main>
      <h1>Clicked {state} times</h1>
      <button className="text-3xl" onClick={() => setState(prev => ++prev)}>
        Add
      </button>
    </main>
  );
};

export default App;
