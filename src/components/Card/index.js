import React from 'react';

import './card.css';

export default class Card extends React.Component {

  render() {
    return (
      <div className="card">
        <div bp="margin--lg 12--max">
          <div className="header">
            <div className="metadata">
              Posted by: <span className="author"> { this.props.author } </span>
              <span className="date"> { this.props.date } ago </span>
              <div> Comments: <span className="comments"> { this.props.comments } </span> </div>
            </div>
          </div>

          <div className="title"> { this.props.title } </div>
          { this.props.thumbnail ?
            <div class="image-container">
              <img className="image" src={ this.props.thumbnail } alt="img" />
            </div>
            : null }
        </div>
      </div>
    )
  }
}
