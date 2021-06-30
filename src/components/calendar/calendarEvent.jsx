import React from 'react'
import moment from 'moment-timezone';

export default function CalendarEvent(props) {

  let handleEventClick = data => {
    console.log(data);
  }

  return (
    <div className="event__container" style={{backgroundColor: `${props.color}`}} onClick={() => handleEventClick(props)}>
      <h5 className='event__title'>{props.activity_name}</h5>
      <h6 className='event__time'>{`${moment(props.start._i).format("h:mm")} - ${moment(props.end._i).format("h:mm a")}`}</h6>
    </div>
  )
}
