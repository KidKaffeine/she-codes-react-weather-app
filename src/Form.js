import "./Form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function Form() {
  const [city, setCity] = useState(undefined);

  function getCity(event) {
    setCity(event.target.value);
  }

  function handleEvent(event) {
    event.preventDefault();
    alert(`Searching for ${city}`);
  }

  return (
    <div className="Form">
      <form onSubmit={handleEvent}>
        <input
          type="text"
          className="input"
          placeholderTextColor="white"
          placeholder="Search city"
          onChange={getCity}
        />
        <button type="submit" on>
          {" "}
          Search{" "}
        </button>
      </form>
    </div>
  );
}
