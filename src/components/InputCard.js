import { useState } from "react";

function InputCard({ handleSubmitClick }) {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  return (
    <div className="flex-item card input-card">
      <form className="input-form" onSubmit={handleSubmitClick}>
        <div>
          <label htmlFor="input1">Input 1:</label>
          <input
            id="input1"
            placeholder="input1"
            required
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="input2">Input 2:</label>
          <input
            id="input2"
            placeholder="input2"
            required
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="input3">Input 3:</label>
          <input
            id="input3"
            placeholder="input3"
            required
            value={value3}
            onChange={(e) => setValue3(e.target.value)}
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
