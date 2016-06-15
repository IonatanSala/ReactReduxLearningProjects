import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render() {

    if(!this.props.activeBook.title) {
      return <div>Please select a book to continue</div>
    }

    return (
      <div>
        <div>Title: {this.props.activeBook.title}</div>
        <div>Pages: {this.props.activeBook.pages}</div>
      </div>
    )
  }
}

function mapStateToProps({ activeBook }) {
  return {
    activeBook
  }
}


export default connect(mapStateToProps)(BookDetail)
