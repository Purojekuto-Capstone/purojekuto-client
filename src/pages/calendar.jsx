import React from 'react'
import Head from 'next/head';
import Layout from '../components/layout/layout';
import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = "AIzaSyDUa0GypAaUF8xz3BTqY_p3l_5ykcHLywo";
let calendars = [
  {
    calendarId: "em8c9s8leob5lputq5cknfdqq8@group.calendar.google.com",
  }
];

export default function CalendarContainer(props) {
  return (
    <>
      <Head>
        <title>My calendar | PuroJekuto</title>
        <meta name="description" content="proyect manager" />
      </Head>

      <Layout>
        <Calendar apiKey={API_KEY} calendars={calendars} language='ES'/>
      </Layout>
    </>
  )
}
