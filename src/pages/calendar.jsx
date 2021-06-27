import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/layout';
// import Calendar from '@ericz1803/react-google-calendar';
import WeekCalendar from 'react-week-calendar';
import moment from 'moment';
import CalendarEvent from '../components/calendar/calendarEvent';
import CalendarModal from '../components/calendar/calendarModal';
import CalendarCell from '../components/calendar/calendarCell';

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
      start: moment("2021-06-29:08:15"),
      end: moment("2021-06-29:08:45"),
      activity_name: 'This is a long event name for a short event',
      color: '#e66d6d'
    }
  ])

  useEffect(() => {}, [calendarView])

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
  
  return (
    <>
      <Head>
        <title>My calendar | PuroJekuto</title>
        <meta name="description" content="proyect manager" />
      </Head>

      <Layout>
        <div onClick={() => changeCalendarView(2)}>2 days</div> <div onClick={() => changeCalendarView(7)}>7 days</div>
        {loading ? (
          <div>Loading</div>
        ) : (
          <WeekCalendar
            firstDay={moment(Date.now()).clone().weekday(1)}
            startTime = {moment({h: 8, m: 0})}
            endTime = {moment({h: 21, m: 0})}
            scaleUnit ={15}
            scaleHeaderTitle="Time"
            cellHeight = {50}
            numberOfDays= {calendarView}
            selectedIntervals = {events}
            onIntervalSelect = {onIntervalSelect}
            // onIntervalUpdate = {this.handleEventUpdate}
            // onIntervalRemove = {this.handleEventRemove}
            // headerCellComponent={CustomHeaderCell}
            dayCellComponent={CalendarCell}
            modalComponent={CalendarModal}
            eventComponent={CalendarEvent}
            // useModal={false}
          />
        )}
        
      </Layout>
    </>
  );
}
