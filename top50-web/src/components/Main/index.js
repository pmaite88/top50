import React from 'react';
import { connect } from 'react-redux';

import {loadPosts} from '../../redux/postsActions';

import Card from '../Card';
import './main.css';

class Main extends React.Component {

  componentDidMount() {
    this.props.loadAll();
  }

  render() {
    return (
      <div bp="container">
        <div bp="grid">
          <div bp="3"></div>
          <div bp="6">
            {this.props.data.map(post =>
              <Card key={post.id}
                title={post.title}
                date={post.date}
                author={post.author}
                comments={post.comments}
              />)}
           </div>
          <div bp="3"></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { data, error, isLoading } = state.posts;

  return { data, error, isLoading };
};

const mapDispatchToProps = dispatch => {
  return {
    loadAll: () => dispatch(loadPosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
