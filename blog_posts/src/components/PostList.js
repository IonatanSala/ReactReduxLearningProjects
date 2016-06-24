import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPosts } from '../actions'

class PostList extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPostList() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/" + post.id} >
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title || "Title name"}</strong>
          </Link>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary" >
            Add Post
          </Link>
        </div>
        <h1>Posts</h1>
        <hr />
        <ul className="list-group">
          {this.renderPostList()}
        </ul>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
