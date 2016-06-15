import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchWeather } from '../actions'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({searchTerm: e.target.value})
  }

  onFormSubmit(e) {
    e.preventDefault();

    // fetch weather data
    this.props.fetchWeather(this.state.searchTerm);
    this.setState({ searchTerm: ''});
  }

  render() {
    return (
        <form onSubmit={this.onFormSubmit} >
          <div className="input-group">
            <input
              placeholder="Enter city"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
              className="form-control"
            />
            <span className="input-group-btn">
              <button className="btn btn-default" type="submit">Search</button>
            </span>
          </div>
        </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
