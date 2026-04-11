import React from 'react'
import Habit from '../components/Habit';
import {useState, useEffect} from 'react'
import Counter from '../components/Counter';
import {Link} from 'react-router-dom'
import './Home.css'
const Home = ({habits, toggleDone, handleDelete, handleSubmit}) => {
    
    let [doneCount, setDoneCount] = useState(0)
    let [totalCount, setTotalCount] = useState(0)

    const today = new Date().toISOString().split("T")[0];
    
      useEffect(() => {
        const done = habits.filter(h => h.completedDates.includes(today)).length;
        const total = habits.length;
      
        setDoneCount(done);
        setTotalCount(total);
      }, [habits]);

  return (
    <div>
        <h1>Welcome back!</h1>
        {habits.length === 0 && <p className="no-habits-parag">You dont have any habits yet</p>}


        <Counter doneCount = {doneCount} totalCount={totalCount}/>
        
         <ul className="no-bullets">
            {habits.map((habit) => (
                <li key={habit.id}>
                  <Habit habit={habit} toggle={toggleDone} deleteHabit={handleDelete}/>
                </li>
            ))}
        </ul>

        <Link className='add-button' to={'/create'}> + </Link>
    </div>
  )
}

export default Home