import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import './historyCalendar.scss';
import React from "react";
import { useDispatch } from "react-redux";
import { getDataHistoryCalendar } from "../store/calendar/actions";
import calendarImg from "../../images/calendar-v2.png";

export function HistoryCalendar() {
 
  const dispatch = useDispatch()
  const [dateRange, setDateRange] = useState<[Date, Date]>([new Date(), new Date()]);
 
  const [startDate, endDate] = dateRange;
  useEffect(() => {
    dispatch(getDataHistoryCalendar(dateRange));
  }, [dateRange, dispatch]);
  console.log(dateRange)
  return (
    <label className="historyCalendar">
      <DatePicker className="datepickerHistory"
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update: any) => {
          setDateRange(update);
        }}
        dateFormat="dd/MM/yyyy"
        withPortal
        onKeyDown={(e) => {
          e.preventDefault();
        }}
      />
      <img className="calendar" src={ calendarImg } alt="calendar"></img>
    </label>
  )
}

export default HistoryCalendar;