import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect, useReducer } from "react";
import './historyCalendar.scss';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataHistoryCalendar } from "../store/calendar/actions";
import { selectItemsList } from "../store/history/selectors";
import { calendarReducer } from "../store/calendar/reducer";
import { initialState } from "../store/calendar/reducer";

export function HistoryCalendar() {
 //const itemsList: any = useSelector(selectItemsList);
  // itemsList.forEach((elem:any) => {
  //   const dateValue = elem.date
  // })
  const dispatch = useDispatch()
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([new Date(), new Date()]);
    //const dateValue = itemsList.elem.date
    //  itemsList.forEach((elem:any) => {
    //  const dateValue = (elem.date).toString('en-Us');
    //  //const newdateValue = new Intl.DateTimeFormat('en-Us').format(dateValue);
    // console.log(dateValue);
    //  return dateValue;
    // }))
  // )
 
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
      <img className="calendar" src="images/calendar-v2.png" alt="calendar"></img>
    </label>
  )
}

export default HistoryCalendar;