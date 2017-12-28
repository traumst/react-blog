import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
// import PostsDelete from './components/posts_delete';
import PostsShow from './components/posts_show';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
    {/*<Route path="posts/delete" component={PostsDelete} />*/}
    <Route path="posts/:id" component={PostsShow} />
  </Route>
);

// The route posts/:id matches with this.props.params.id
