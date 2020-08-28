import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { dismissPosts, loadPosts } from '../../redux/postsActions';
import Card from '../Card';
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
          <div bp="3"></div>
          <div bp="6">
              <div className="actions">
                <button className="action" onClick={this.handleButton}>
                  { this.props.data.length ? 'Dismiss All' : 'Load Posts' }
                </button>
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
    loadAll: () => dispatch(loadPosts()),
    dismissAll: () => dispatch(dismissPosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
