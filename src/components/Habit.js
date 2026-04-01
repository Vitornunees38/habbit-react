import {useState} from 'react'

const Habit = ({habit, toggle}) => {

  return (
    <div>
        <input type="checkbox" id={habit.id} checked={habit.done} onChange={()=>toggle(habit.id)}/> {habit.name}
    </div>
  )
}

export default Habit