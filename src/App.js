import './App.css';
import Counter from './components/Counter';
import CreateHabit from './pages/CreateHabit';
import HabitPage from './pages/HabitPage';

import {useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {

  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem('habits');
    return savedHabits ? JSON.parse(savedHabits) : [
      {id:1, name: "Workout", description:"", completedDates:[]},
      {id:2, name: "Study", description:"", completedDates:[]},
      {id:3, name: "Drink water", description:"", completedDates:[]},
      {id:4, name: "Run 5km", description:"", completedDates:[]}
    ];
  });

      const getToday = () => new Date().toISOString().split("T")[0];

      useEffect(() => {
        localStorage.setItem('habits', JSON.stringify(habits));
      }, [habits]);
    
      const toggleDone = (id) => {

        const today = getToday();

        setHabits((prevHabits) =>
        prevHabits.map((habit) => {
          if (habit.id !== id) return habit;

          const alreadyDone = habit.completedDates.includes(today);

          return {
            ...habit,
            completedDates: alreadyDone
              ? habit.completedDates.filter(date => date !== today) // remove
              : [...habit.completedDates, today] // add
          };
        })
      );
    };

      const handleDelete = (habitToDelete) => {

        setHabits((prevHabits) =>
          prevHabits.filter((habit) => habit.id !== habitToDelete.id)
        );
    
      }

      const handleSubmit = ({id, name, description, edit}) => {
    
        const newHabit = {
          id: id, // id simples
          name: name,
          description: description,
          done: false,
          completedDates: []
        };
        
        if (edit) {
          handleDelete(newHabit)
        }
        
        
        setHabits((prevHabits) => [
          ...prevHabits,
          newHabit
        ]);
    
      }

  return (
    <div className="App">
      <div className="App-header">
        <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home habits={habits} toggleDone={toggleDone}  handleDelete={handleDelete} handleSubmit={handleSubmit}/>}/>
          <Route path="/create" element={<CreateHabit handleSubmit={handleSubmit}/>}/>
          <Route path="/habit/:id" element={<HabitPage habits={habits}/>}/>
        </Routes>
        </BrowserRouter>
    </div>
    </div>
    </div>
  );
}

export default App;
