import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/layout';
// import Calendar from '@ericz1803/react-google-calendar';
import WeekCalendar from 'react-week-calendar';
import moment from 'moment';


const API_KEY = 'AIzaSyDUa0GypAaUF8xz3BTqY_p3l_5ykcHLywo';
let calendars = [
  {
    calendarId: 'em8c9s8leob5lputq5cknfdqq8@group.calendar.google.com',
  },
];

export default function CalendarContainer(props) {
  const [events, setEvents] = useState([])
  
  return (
    <>
      <Head>
        <title>My calendar | PuroJekuto</title>
        <meta name="description" content="proyect manager" />
      </Head>

      <Layout>
        <WeekCalendar
          startTime = {moment({h: 8, m: 0})}
          endTime = {moment({h: 21, m: 0})}
          scaleUnit ={60}
          scaleHeaderTitle="Time"
          cellHeight = {50}
          numberOfDays= {7}
          selectedIntervals = {events}
          // onIntervalSelect = {this.handleSelect}
          // onIntervalUpdate = {this.handleEventUpdate}
          // onIntervalRemove = {this.handleEventRemove}
          // headerCellComponent={CustomHeaderCell}
          // dayCellComponent={CustomDayCell}
          // modalComponent={CustomModal}
          // eventComponent={CustomEvent}
        />
      </Layout>
    </>
  );
}
