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
      {id:1, name: "Workout", done: false},
      {id:2, name: "Study", done: true},
      {id:3, name: "Drink water", done: false},
      {id:4, name: "Run 5km", done: false}
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

      const handleSubmit = (e) => {
        e.preventDefault();
    
        const form = e.target;
        const name = form.name.value;
    
        if (!name.trim()) return; // evita vazio
    
        const newHabit = {
          id: Date.now(), // id simples
          name: name,
          done: false
        };
    
        setHabits((prevHabits) => [
          ...prevHabits,
          newHabit
        ]);
    
        form.reset();
      }

  return (
    <div className="App">
      <div className="App-header">
        <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home habits={habits} toggleDone={toggleDone}  handleDelete={handleDelete} handleSubmit={handleSubmit}/>}/>
          <Route path="/create" element={<CreateHabit/>}/>
          <Route path="/habit/:id" element={<HabitPage habits={habits}/>}/>
        </Routes>
        </BrowserRouter>
    </div>
    </div>
    </div>
  );
}

export default App;
