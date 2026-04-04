import React from 'react'
import "./CreateHabit.css"
import { useState } from 'react'
import {useNavigate, useLocation} from 'react-router-dom'


const CreateHabit = ({handleSubmit}) => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const habitToEdit = location.state?.habit;

  const [name, setName] = useState(habitToEdit?.name || "")
  const [description, setDescription] = useState(habitToEdit?.description || "")

  const [edit, setEdit] = useState(habitToEdit ? true : false)

  const onSubmit = (e) => {
    e.preventDefault();

    if (name.trim()) {
      handleSubmit({
        id: habitToEdit ? habitToEdit.id : Date.now(),
        name,
        description,
        edit
      });

      navigate("/");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
           <label>
            Habit Name:
            <input className='create-form-input' type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Put your habit name here :)'/>
          </label>
          <label>
            Habit Description:
            <input className='create-form-input' type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Describe your Habit!'/>
          </label>          
          <input className='create-button' type="submit" value={edit? "Edit Habit" : "Create Habit"} />
      </form>
    </div>
  )
}

export default CreateHabit