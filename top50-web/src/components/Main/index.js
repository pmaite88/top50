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

              <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={800}
              >
                {this.props.data.map(post =>
                  <Card
                    key={post.id}
                    title={post.title}
                    date={post.date}
                    author={post.author}
                    comments={post.comments}
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
