import React from 'react'
import moment from 'moment-timezone';
import { useRouter } from 'next/router';

export default function CalendarEvent(props) {
  let router = useRouter()

  // let handleEventClick = data => {
  //   console.log(data);
  //   router.push(`/project/${data.project}/event/${data.id}`)
  // }

  return (
    <div className="event__container" style={{backgroundColor: `${props.colorId ? props.colorId : '#e66d6d' }`}} onClick={() => handleEventClick(props)}>
      <h5 className='event__title'>{props.summary}</h5>
      <h6 className='event__time'>{`${moment(props.start._i).format("h:mm")} - ${moment(props.end._i).format("h:mm a")}`}</h6>
    </div>
  )
}
