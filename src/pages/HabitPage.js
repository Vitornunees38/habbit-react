import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import HabitGrid from '../components/HabitGrid.js'

import './HabitPage.css'

const HabitPage = ({habits}) => {

  const {id} = useParams()

  const habit = habits.find(h => String(h.id) === id);

 
  return (
    <div className="habit-info-div">
        {!habit && <p>Hábito não encontrado</p>}
        <h1>{habit.name}</h1>
        <p>{habit.description}</p>
        <HabitGrid habit={habit}/>
        <Link className='edit-button' to={'/create'} state={{ habit }}> Edit </Link>
    </div>
  )
}

export default HabitPage