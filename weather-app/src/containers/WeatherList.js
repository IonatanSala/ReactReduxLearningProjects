import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart'
import GoogleMap from '../components/GoogleMap'

class WeatherList extends Component {

  renderWeather(cityData) {
    const { lat, lon } = cityData.city.coord
    const name = cityData.city.name;
    const temps = cityData.list.map((weather) => weather.main.temp -  273.15)
    const humidity = cityData.list.map((weather) => weather.main.humidity)
    const pressure = cityData.list.map((weather) => weather.main.pressure)

    return (
      <tr key={name}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td>
          <Chart data={temps} color="red" units="C" />
        </td>
        <td>
          <Chart data={pressure} color="blue" units="hPa" />
        </td>
        <td>
          <Chart data={humidity} color="green" units="%" />
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.weather.map(this.renderWeather)
          }
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
