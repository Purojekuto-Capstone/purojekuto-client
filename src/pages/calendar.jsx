import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import Loader from '../components/loader/loader'
import WeekCalendar from 'react-week-calendar';
import moment from 'moment';
import CalendarEvent from '../components/calendar/calendarEvent';
import CalendarModal from '../components/calendar/calendarModal';
import CalendarCell from '../components/calendar/calendarCell';
import CalendarHeader from '../components/calendar/calendarHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function CalendarContainer(props) {
  const [calendarView, setCalendarView] = useState(7)
  const [loading, setLoading] = useState(false)
  const [events, setEvents] = useState([
    {
      start: moment({h: 8, m: 0}),
      end: moment({h: 10, m: 0}),
      activity_name: 'Meeting 1:1 coach',
      color: '#e66d6d'
    },
    {
      start: moment({h: 8, m: 0}),
      end: moment({h: 10, m: 0}),
      activity_name: 'Master Introducction for dummys',
      color: '#e6dd6d'
    },
    {
      start: moment("2021-06-29T01:50:51.338Z"),
      end: moment("2021-06-29T01:50:51.338Z"),
      activity_name: 'This is a long event name for a short event',
      color: '#e66d6d'
    }
  ])
  const [day, setday] = useState(Date.now())

  useEffect(() => {}, [calendarView, day])

  let changeCalendarView = days => {
    if (days !== calendarView) {
      setLoading(true)
      setCalendarView(days)
      setTimeout(() => {
        setLoading(false)
      }, 400);
    }
  }

  let onIntervalSelect = data => {
    console.log(data);
  }


  let moveWeek = option => {
    let date = new Date(day)
    if(option === 'next') {
      date.setDate(date.getDate() + 7)
    } else if(option === 'previus') {
      date.setDate(date.getDate() - 7)
    } else {
      date = Date.now()
    }
    setday(date)
  }
  
  return (
    <>
      <Head>
        <title>My calendar | PuroJekuto</title>
        <meta name="description" content="proyect manager" />
      </Head>

      <Layout>
        
        {/* <div onClick={() => changeCalendarView(1)}>2 days</div> <div onClick={() => changeCalendarView(7)}>7 days</div> */}
        {loading ? (
          <div>
            <Loader/>
          </div>
        ) : (
          <>
            <div className='calendar__header'>
              <h2>{moment(day).format("MMMM YYYY")}</h2>
              <div className='calendar__actions'>
                <span className='text-left' onClick={() => moveWeek('previus')}>
                  <FontAwesomeIcon icon={faChevronLeft}/>
                </span>
                <span className='text-right' onClick={() => moveWeek('today')}>
                  Today
                </span>
                <span className='text-right' onClick={() => moveWeek('next')}>
                  <FontAwesomeIcon icon={faChevronRight}/>
                </span>
              </div>
            </div>
            <WeekCalendar
              firstDay={moment(day).clone().weekday(0)}
              startTime = {moment({h: 0, m: 0})}
              endTime = {moment({h: 23, m: 0})}
              scaleUnit ={15}
              scaleHeaderTitle="Time"
              cellHeight = {50}
              numberOfDays= {calendarView}
              selectedIntervals = {events}
              onIntervalSelect = {onIntervalSelect}
              // onIntervalUpdate = {this.handleEventUpdate}
              // onIntervalRemove = {this.handleEventRemove}
              headerCellComponent={CalendarHeader}
              dayCellComponent={CalendarCell}
              modalComponent={CalendarModal}
              eventComponent={CalendarEvent}
              // useModal={false}
            />
          </>
          
        )}
        
      </Layout>
    </>
  );
}
