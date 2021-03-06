import React from 'react'
import moment from 'moment'

export default function CalendarHeader(props) {
  let date = moment(props.date._d)
  let today = moment(Date.now())
  let dateParsed = moment(date)._d
  let todayParsed = moment(today)._d
  let dateC  = moment(dateParsed).format("ddd D MMM YYYY")
  let todayC = moment(todayParsed).format("ddd D MMM YYYY")

  return (
    <div className='header__cell'>
      <h6 className='header__weekDay'>{`${moment(props.date).format("ddd")}`}</h6>
      <h5 className={`header__day ${dateC === todayC ? 'today' : ''}`}>{`${moment(props.date).format("D")}`}</h5>
    </div>
  )
}
