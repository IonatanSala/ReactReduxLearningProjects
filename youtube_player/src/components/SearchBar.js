import React, { Component } from 'react'

export default class SearchBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchTerm: ''
		}

		this.onInputChange = this.onInputChange.bind(this)
	}

	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.searchTerm}
					onChange={this.onInputChange}
				/>
			</div>
		)
	}

	onInputChange(e) {
		let value = e.target.value
		this.setState({
			searchTerm: value
		})

		this.props.onSearchTermChange(value);
	}

}


export default SearchBar
