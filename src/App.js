import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherDetails from "./WeatherDetails";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherDetails />
      </div>
      <footer>
        Page built by Vanessa Marques. Open source code on{" "}
        <a
          href="https://github.com/ZebraDancer/react-weather-app"
          target="_blank"
          rel="nonreferrer"
        >
          GitHub.
        </a>
      </footer>
    </div>
  );
}

export default App;
