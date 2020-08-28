import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { dismissPosts, loadPosts } from '../../redux/postsActions';
import Card from '../Card';
import Button from '../Button';
import './main.css';

class Main extends React.Component {

  componentDidMount() {
    this.props.loadAll();
  }

  handleButton = () => {
    if (this.props.data.length) {
      this.props.dismissAll();
    } else {
      this.props.loadAll();
    }
  }

  render() {
    return (
      <div bp="container">
        <div bp="grid">
          <div bp="2@sm 2@md 3@lg"></div>
          <div bp="8@sm 8@md 6@lg">
              <div className="posts-actions">
                <Button
                  action={this.handleButton}
                  name={ this.props.data.length ? 'Dismiss All' : 'Load Posts' }
                />
              </div>

              { this.props.isLoading ? <div class="spinner"></div> : null }

              <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={null}
                transitionLeaveTimeout={800}
              >
                {this.props.data.map(post =>
                  <Card
                    key={post.id}
                    title={post.title}
                    date={post.created_at}
                    author={post.author}
                    comments={post.comments}
                    thumbnail={post.thumbnail}
                  />)}
              </ReactCSSTransitionGroup>
             </div>
          <div bp="2@sm 2@md 3@lg"></div>
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
    loadAll: () => dispatch(loadPosts()),
    dismissAll: () => dispatch(dismissPosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
