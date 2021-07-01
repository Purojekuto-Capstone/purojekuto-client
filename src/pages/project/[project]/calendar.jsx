import React, { useEffect, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { store } from '../../../context/store'
//components
import Layout from '../../../components/layout/layout'
import Loader from '../../../components/loader/loader'
//calendar
import WeekCalendar from 'react-week-calendar';
import CalendarEvent from '../../../components/calendar/calendarEvent';
import CalendarModal from '../../../components/calendar/calendarModal';
import CalendarCell from '../../../components/calendar/calendarCell';
import CalendarHeader from '../../../components/calendar/calendarHeader';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
//moment
import moment from 'moment'
import { getCalendarActivitysByProjectId } from '../../../utils/services'


export default function ProjectCalendar(props) {
  const router = useRouter()
  const { project } = router.query
  const { state } = useContext(store)
  const { token } = state
  const [day, setday] = useState(Date.now())
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    let firstDay = new Date(day)
    let lastday = new Date(day)
    lastday.setDate(lastday.getDate() + 7)
    let dateA = moment(firstDay).clone().weekday(0).toISOString()
    let dateB = moment(firstDay).clone().weekday(6).toISOString()

    getCalendarActivitysByProjectId(config, project , dateA, dateB)
    .then(res => {
      let events = []
      res.map(e => {
        let x = {
          ...e,
          start: moment(e.start),
          end: moment(e.end)
        }
        events.push(x)
      })
      setEvents(events)
      setLoading(false)
    })
    .catch(err => {
      console.error(err)
    })

  }, [day])

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
        <title>My project calendar | PuroJekuto</title>
        <meta name="description" content="proyect manager" />
      </Head>
      <Layout>
        {loading ? (
          <div className='loader__container'>
            <Loader/>
          </div>
        ):(
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
              endTime = {moment({h: 23, m: 50})}
              scaleUnit ={15}
              scaleHeaderTitle="Time"
              cellHeight = {50}
              numberOfDays= {7}
              selectedIntervals = {events}
              headerCellComponent={CalendarHeader}
              dayCellComponent={CalendarCell}
              eventComponent={CalendarEvent}
              useModal={false}
            />
          </>
        )}
      </Layout>
    </>
  )
}
