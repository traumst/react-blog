import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  
  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <span className="float-right">{post.categories}</span>
          <div className="icon float-left">
            <input type="checkbox" className="mark-delete" id={post.id}/>
            <img src="./fourth.png"/>
          </div>
          <Link to={"posts/" + post.id}>
            <strong>{post.title}</strong><br/>
          </Link>
          <p className='post-content'>{post.content}</p>
        </li>
      );
    });
  }
  
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <div className="text-xs-right">
          <Link to="/posts/delete" className="btn btn-primary">
            Delete Posts
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
            {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {posts: state.posts.all}
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
