import {useState} from 'react'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import "./Habit.css"

const Habit = ({habit, toggle, deleteHabit}) => {

  let url = "/" + habit.id

  console.log(url)

  return (
    <div className = "habit-div">
        <input type="checkbox" id={habit.id} checked={habit.done} onChange={()=>toggle(habit.id)}/>
          <Link to={url}>{habit.name}</Link>
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