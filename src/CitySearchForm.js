import "./CitySearchForm.css";

export default function CitySearchForm() {
  return (
    <form id="search-form">
      <input
        type="text"
        placeholder="Type a city name..."
        autocomplete="off"
        autofocus="on"
        id="city-input"
        value="Blumenau"
      />
      <input type="submit" value="🔍" />
    </form>
  );
}
