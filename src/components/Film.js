import React from 'react';
import { List } from 'antd';
import moment from 'moment';

const Film = (props) => {
  return (
      <List
        itemLayout="vertical"
        dataSource={props.films}
        renderItem={film => (
        <List.Item>
          <h3>{film.title}</h3>
          <p>{film.director}</p>
          <p>{moment(new Date(film.release)).format('dddd, MMMM Do YYYY')}</p>
        </List.Item>
      )}/>
  )
}

export default Film;
