import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="page-bottom">
      <span>
        <em>Coming 5-days Forecast: </em>
      </span>
      <hr className="hr" />
      <br />
      <div id="forecast"></div>
    </div>
  );
}
