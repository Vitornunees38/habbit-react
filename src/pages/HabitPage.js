import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

const HabitPage = ({habits}) => {

  const {id} = useParams()

  const habit = habits.find(h => String(h.id) === id);


  return (
    <div>
        {!habit && <p>Hábito não encontrado</p>}
        <h1>{habit.name}</h1>
    </div>
  )
}

export default HabitPage