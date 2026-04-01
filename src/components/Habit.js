import {useState} from 'react'

const Habit = ({habit, toggle, deleteHabit}) => {

  return (
    <div className = "habit-div">
        <input type="checkbox" id={habit.id} checked={habit.done} onChange={()=>toggle(habit.id)}/> {habit.name}
        <button className onClick={()=>deleteHabit(habit)}>-</button>
    </div>
  )
}

export default Habit