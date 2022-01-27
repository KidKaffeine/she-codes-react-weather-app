import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherAPICall from "./WeatherAPICall";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherAPICall defaultCity="Berlin" />
      </div>
      <footer>
        App built by Vanessa Marques. Open source code on{" "}
        <a
          href="https://github.com/ZebraDancer/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub.
        </a>
      </footer>
    </div>
  );
}

export default App;
