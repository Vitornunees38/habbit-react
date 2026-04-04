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
      {id:1, name: "Workout", decription:"", done: false},
      {id:2, name: "Study", decription:"", done: true},
      {id:3, name: "Drink water", decription:"", done: false},
      {id:4, name: "Run 5km", decription:"", done: false}
    ];
  });

    
      useEffect(() => {
        localStorage.setItem('habits', JSON.stringify(habits));
      }, [habits]);
    
      const toggleDone = (id) => {
        setHabits((prevHabits) =>
          prevHabits.map((habit) => 
            habit.id === id ? {...habit, done: !habit.done} : habit
          ))
      }

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
          done: false
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
