import {useState} from 'react'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import "./Habit.css"

const Habit = ({habit, toggle, deleteHabit}) => {

  const today = new Date().toISOString().split("T")[0];
  const isDoneToday = habit.completedDates.includes(today);

  return (
    <div className = "habit-div">
        <label className="custom-checkbox">
          <input
            type="checkbox"
            checked={isDoneToday}
            onChange={() => toggle(habit.id)}
          />
          <span className="checkmark"></span>
        </label>
          <Link to={`/habit/${habit.id}`} className={isDoneToday ? "habit-name done" : "habit-name"}>{habit.name}</Link>
        <button className="delete-button" onClick={()=>deleteHabit(habit)}>
          <svg xmlns="http://www.w3.org/2000/svg" 
              width="16" height="16" 
              fill="currentColor" 
              viewBox="0 0 16 16">
            <path d="M5.5 5.5v7m5-7v7M2.5 3h11M6 3V2h4v1m-7 0h10l-1 11H4L3 3z"/>
          </svg>
        </button>
    </div>
  )
}

export default Habit

