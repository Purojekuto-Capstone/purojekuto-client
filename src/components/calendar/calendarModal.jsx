
import React, {useEffect} from 'react'
import moment from 'moment'

export default function CalendarModal(props) {
  useEffect(() => {
    console.log(props);
  }, [props])

  return (
    <div>
            <h6 className='event__time'>{`${moment(props.start).format("h:mm")} - ${moment(props.end).format("h:mm a")}`}</h6>
    </div>
  )
}
