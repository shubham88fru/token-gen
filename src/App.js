import { useState } from "react";
import InputCard from "./components/InputCard";
import JSONViewCard from "./components/JSONViewCard";
import "./styles/styles.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [apiRes, setApiRes] = useState(null);

  async function handleSubmitClick(e) {
    e.preventDefault();
    setLoading(true);
    setApiRes({ key1: "value1", key2: "value2" });
    setLoading(false);
  }

  return (
    <div className="App">
      <h1 className="app--header">Generate Auth tokens</h1>
      <div className="app-container">
        <InputCard handleSubmitClick={handleSubmitClick} />
        <JSONViewCard loading={loading} apiRes={apiRes} />
      </div>
    </div>
  );
}

export default App;
