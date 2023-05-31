import { useState } from 'react';
import Calendar from 'react-calendar';
import "../../styles/calendar.css"

const CalendarTsx=()=>{

        const [date, setDate] = useState(new Date());
        const handleDateChange = (value:any, event:any) => {
            setDate(value);
          };
        return(
            <>
        
            <div className='app'>
                <h1 className='text-center'>React Calendar</h1>
                <div className='calendar-container'>
                    <Calendar onChange={handleDateChange} value={date} />
                </div>
                <p className='text-center'>
                <span className='bold'>Selected Date:</span>{' '}
                {date.toDateString()}
                </p>
            </div>

            </>
        )

}

export default CalendarTsx