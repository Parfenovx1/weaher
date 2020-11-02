import React from "react";

const Weather = (props) => (
  <div className="infoWeath">
    {props.temp && (
      <div>
        <p>
          Местоположение: {props.city}, {props.country}
        </p>
        <p>Температура: {props.temp} °С </p>
        <p>Ощущается как:{props.feelsLike} °С</p>
        <p>Минииальная температура:{props.tempMin} °С</p>
        <p>Максималная температура:{props.tempMax} °С</p>
        <p>Скорость ветра:{props.windSpeed} м/с</p>
        <p>Давление:{props.pressure}</p>
      </div>
    )}
    <p className="error">{props.error}</p>
  </div>
);

export default Weather;
