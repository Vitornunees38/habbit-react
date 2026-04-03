import React from 'react'
import "./CreateHabit.css"
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'


const CreateHabit = ({handleSubmit}) => {
  
  const navigate = useNavigate();

  const onSubmit = (e) => {
        e.preventDefault();
        if (e.target.name.value.trim()){
          handleSubmit(e)
          navigate("/")
        } 
      }

  return (
    <div>
      <form onSubmit={onSubmit}>
           <label>
            Habit Name:
            <input className='create-form-input' type="text" name="name" placeholder='Put your habit name here :)'/>
          </label>
          
          <input className='create-button' type="submit" value="Create Habit" />
      </form>
    </div>
  )
}

export default CreateHabit