import { useState } from "react";

function InputCard({ handleSubmitClick }) {
  const [app, setApp] = useState("");
  const [appId, setAppId] = useState("");
  const [api, setApi] = useState("");

  return (
    <div className="flex-item card input-card">
      <form className="input-form" onSubmit={handleSubmitClick}>
        <div>
          <label htmlFor="input1">App:</label>
          <input
            id="input1"
            placeholder="App name.."
            required
            value={app}
            onChange={(e) => setApp(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="input2">App Id: </label>
          <input
            id="input2"
            placeholder="App id.."
            required
            value={appId}
            onChange={(e) => setAppId(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="input3">API:</label>
          <input
            id="input3"
            placeholder="Api.."
            required
            value={api}
            onChange={(e) => setApi(e.target.value)}
          ></input>
        </div>

        <div>
          <button className="btn btn--form" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputCard;
