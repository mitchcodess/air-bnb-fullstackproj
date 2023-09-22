import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react'
export default function BookingCalendar({handleStartDate, handleEndDate, startDate, endDate}) {

        return (<>
        <DatePicker
        selected={startDate}
        onChange={(date) => handleStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => handleEndDate(date) }
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
      </>
        );
   
}
