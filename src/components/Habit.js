import {useState} from 'react'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'

const Habit = ({habit, toggle, deleteHabit}) => {

  return (
    <div className = "habit-div">
        <input type="checkbox" id={habit.id} checked={habit.done} onChange={()=>toggle(habit.id)}/>
          <Link>{habit.name}</Link>
        <button className onClick={()=>deleteHabit(habit)}>-</button>
    </div>
  )
}

export default Habit