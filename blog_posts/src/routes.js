import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import PostList from './components/PostList';
import PostNew from './components/PostNew';
import Post from './components/Post';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={PostList} />
    <Route path="posts/new" component={PostNew} />
    <Route path="posts/:id" component={Post} />
  </Route>
);
