import React from 'react';

import Card from '../Card';
import './main.css';

const data = [
  <Card title="Some title That is too long but it will work anyway"  date="1 day ago" author="Pepe" commentsCount={12}/>,
  <Card title="Other title" date="2 days ago" author="Some long name" commentsCount={3}/>,
  <Card title="Third title" date="3 days ago" author="Mario" commentsCount={5}/>,
  <Card title="Fourth title" date="4 days ago" author="Pipi" commentsCount={11}/>
 ]

export default class Main extends React.Component {

  render() {
    return (
      <div bp="container">
        <div bp="grid">
          <div bp="3"></div>
          <div bp="6"> { data } </div>
          <div bp="3"></div>
        </div>
      </div>
    )
  }

}
