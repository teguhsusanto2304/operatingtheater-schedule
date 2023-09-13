import React, { useState } from "react";
import { useEffect } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import moment from 'moment'

const localizer = momentLocalizer(moment)

const About = () => {
  const [schedules, setSchedules, cal_events] = useState([]);

  useEffect(() => {
    fetch(`https://api.balimadeinbali.com/api/v1/schedules`)
      .then(response => response.json())
      .then(data => {
        setSchedules(data['data']);
        let appointments = schedules;

        for (let i = 0; i < appointments.length; i++) {

          appointments[i].title = appointments[i].oderNum
          appointments[i].allDay = true
          appointments[i].start = appointments[i].scheduleDate
          appointments[i].end = appointments[i].scheduleDate


        }

        this.setState({
          cal_events: appointments
        })
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <div class="container">
      <h1>Jadwal Kamar Operasi</h1>
      <div class="container">
        <Calendar
          localizer={localizer}
          event={cal_events}
          view={cal_events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
};

export default About;