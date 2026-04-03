import React from 'react'
import Habit from '../components/Habit';
import {useState, useEffect} from 'react'
import Counter from '../components/Counter';

const Home = ({habits, toggleDone, handleDelete, handleSubmit}) => {
    
    let [doneCount, setDoneCount] = useState(0)
    let [totalCount, setTotalCount] = useState(0)
    
      useEffect(() => {
        const done = habits.filter(h => h.done).length;
        const total = habits.length;
      
        setDoneCount(done);
        setTotalCount(total);
      }, [habits]);

  return (
    <div>
        <h1>Welcome back!</h1>

        <Counter doneCount = {doneCount} totalCount={totalCount}/>

         <ul className="no-bullets">
            {habits.map((habit) => (
                <li key={habit.id}>
                  <Habit habit={habit} toggle={toggleDone} deleteHabit={handleDelete}/>
                </li>
            ))}
        </ul>

        <form onSubmit = {handleSubmit}>
          <label>
            New Habit:
            <input type="text" name="name" />
          </label>
          
          <input type="submit" value="+ Add Habit"/>
        </form>
    </div>
  )
}

export default Home