import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import moment from 'moment';
import taskIcon from '../assets/add.png';

const CalendarComponent = () => {
  const [view, setView] = useState<string>('dayGridMonth'); // Explicitly define type as string

  const handleViewChange = (newView: string) => { // Explicitly define type as string
    setView(newView);
  };

  const handleDateSelect = (selectInfo: any) => {
    const title = prompt('Please enter event title:');
    if (title) {
      const calendarApi = selectInfo.view.calendar;
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo: any) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'?`)) {
      clickInfo.event.remove(); // Remove the clicked event
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Second Rectangle */}
      <div className="bg-customGray rounded-lg flex-grow h-full ml-4 mr-4 flex flex-col overflow-auto">
        {/* FullCalendar component */}
        <div style={{ height: '100%', width: '100%' }}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={view}
            selectable={true} // Enable date selection
            select={handleDateSelect} // Handle date selection event
            eventClick={handleEventClick} // Handle event click event for deletion
            events={[
              { id: 'event1', title: 'Event 1', start: moment().toISOString(), allDay: true },
              { id: 'event2', title: 'Event 2', start: moment().add(1, 'days').toISOString(), allDay: true },
              { id: 'event3', title: 'Event 3', start: moment().add(2, 'days').toISOString(), allDay: true },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
