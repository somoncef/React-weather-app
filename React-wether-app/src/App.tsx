import "./App.css";
import { useState } from "react";

function App() {
  const API_key = "acd2ca720c2db1a2d7b98a28d3c04962";

  const [City, SettCity] = useState("");
  const [Data, SetData] = useState(null);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_key}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        SetData(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="app-container">
        <div className="card">
          <h1 style={{ color: "white", textAlign: "center" }}>Weather APP</h1>
          <div className="d-flex">
            <input
              className="form-control me-2"
              placeholder="Add task"
              aria-label="Search"
              value={City}
              onChange={(e) => SettCity(e.target.value)}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={() => {}}
            >
              Search
            </button>
          </div>
          <br />

          <pre>{JSON.stringify(Data, null, 2)}</pre>
        </div>
      </div>
    </form>
  );
}

export default App;
