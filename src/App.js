import "./App.css";
import CitySearchForm from "./CitySearchForm";
import CurrentTemperature from "./CurrentTemperature";
import CityWeather from "./CityWeather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div>
      <div className="container">
        <div className="title">
          <h1>Weather Forecast</h1>
          <hr className="hr" />
        </div>
        <div className="page-center">
          <div className="center-left">
            <CitySearchForm />
            <CurrentTemperature />
          </div>
          <div className="center-right">
            <CityWeather />
          </div>
        </div>
        <Forecast />
      </div>
    </div>
  );
}
