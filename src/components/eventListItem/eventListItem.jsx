import React from 'react'
import moment from 'moment'

export default function EventListItem(props) {
  const {summary, end, id, start, status, type} = props.event
  console.log(props.event);
  return (
    <div className='eventItem__container'>
      <h4 className='label title'>{summary ? summary : '-'}</h4>
      <h5 className='label type'>{type ? type : '-'}</h5>
      <h5 className='label date'>{moment(start).format("HH:mm")} - {moment(end).format("HH:mm a")}</h5>
      <h5 className='label status'>{status ? status : ''}</h5>
    </div>
  )
}
