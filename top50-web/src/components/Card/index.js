import React from 'react';
import './card.css';

export default class Card extends React.Component {

  render() {
    return (
      <div className="card">
        <div bp="margin--lg 12--max">
          <div bp="12--max">
            <div className="metadata">
              Posted by: <span className="author"> { this.props.author } </span>
              <div className="date"> { this.props.date } </div>
            </div>


            <div className="title"> { this.props.title } </div>

            <img className="image" src="https://lunawood.com/wp-content/uploads/2018/02/placeholder-image-768x576.png" />

            <div className="metadata">
              Comments: <span className="comments"> { this.props.commentsCount } </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
