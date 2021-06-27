import React from 'react'

export default function CalendarCell(props) {
  const hour = props.startTime.hour();
  return (
    <div className="cell__container" onMouseDown={props.startSelection}>
      
    </div>
  )
}
