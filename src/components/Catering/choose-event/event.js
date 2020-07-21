import React from 'react';
import './event.scss';

const Event = ({ title }) => {
  return (
    <div className="event">
        <h2 className="event__title"> { title } </h2>
    </div>
  )
}

export default Event;