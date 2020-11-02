import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "85927c51ef5a0309f67aff5077b68055";

class App extends React.Component {
  state = {
    windSpeedtemp: undefined,
    feelsLike: undefined,
    tempMax: undefined,
    tempMin: undefined,
    city: undefined,
    country: undefined,
    windSpeed: undefined,
    pressure: undefined,
    error: undefined,
  };

  getttingWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();
      console.log(data);
      // let sunset = data.sys.sunset;
      // let date = new Date();
      // date.setTime(sunset);
      // let sunsetDate =
      //   date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      // let sunrise = data.sys.sunrise;
      // let date1 = new Date();
      // date1.setTime(sunrise);
      // let sunriseDate =
      //   date1.getHours() + ":" + date1.getMinutes() + ":" + date1.getSeconds();

      this.setState({
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        tempMax: data.main.temp_max,
        tempMin: data.main.temp_min,
        city: data.name,
        country: data.sys.country,
        windSpeed: data.wind.speed,
        pressure: data.main.pressure,
        error: undefined,
      });
    } else {
      this.setState({
        windSpeedtemp: undefined,
        feelsLike: undefined,
        tempMax: undefined,
        tempMin: undefined,
        city: undefined,
        country: undefined,
        windSpeed: undefined,
        pressure: undefined,
        error: "Введите название города",
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
                <Form weatherMethod={this.getttingWeather} />
                <Weather
                  temp={this.state.temp}
                  feelsLike={this.state.feelsLike}
                  tempMax={this.state.tempMax}
                  tempMin={this.state.tempMin}
                  city={this.state.city}
                  country={this.state.country}
                  windSpeed={this.state.windSpeed}
                  pressure={this.state.pressure}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
