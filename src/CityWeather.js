import "./CityWeather.css";

export default function CityWeather() {
  return (
    <div>
      <h2 id="city-search-result">
        Blumenau
        <br />
      </h2>
      <p className="current-weather">
        <span id="show-day">Friday</span>
        <br />
        <span id="show-date">13/01</span>
        <br />
        <span id="show-time">17:15</span>
        <br />
        <br />
        <span id="description">Weather description: cloudy</span>
        <br />
        <span id="wind">Wind speed: 2 m/s</span>
      </p>
    </div>
  );
}
