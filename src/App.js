import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherAPICall from "./WeatherAPICall";
import FiveDayForecast from "./FiveDayForecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <WeatherAPICall defaultCity="Berlin" />
          </div>
          <div className="col-sm-6">
            <FiveDayForecast />
          </div>
        </div>
      </div>
      <footer>
        Page built by Vanessa Marques. Open source code on{" "}
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
