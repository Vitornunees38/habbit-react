import './App.css';
import Counter from './components/Counter';
import CreateHabit from './pages/CreateHabit';
import HabitPage from './pages/HabitPage';

import {useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {

  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/habits")
      .then(res => res.json())
      .then(data => setHabits(data));
  }, []);


      const getToday = () => new Date().toISOString().split("T")[0];

    
      const toggleDone = async (id) => {
        const today = getToday();
      
        const habit = habits.find(h => h.id === id);
      
        const alreadyDone = habit.completedDates.includes(today);
      
        const updatedHabit = {
          ...habit,
          completedDates: alreadyDone
            ? habit.completedDates.filter(date => date !== today)
            : [...habit.completedDates, today]
        };
      
        await fetch(`http://localhost:8080/habits/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(updatedHabit)
        });
      
        setHabits(prev =>
          prev.map(h => (h.id === id ? updatedHabit : h))
        );
      };

      const handleDelete = async (habitToDelete) => {

        await fetch(`http://localhost:8080/habits/${habitToDelete.id}`, {
          method: "DELETE"
        });

        setHabits((prevHabits) =>
          prevHabits.filter((habit) => habit.id !== habitToDelete.id)
        );
    
      }

      const handleSubmit = async ({id, name, description, edit}) => {
        
        const existingHabit = habits.find(h => h.id === id);

        const newHabit = {
          id: id, // id simples
          name: name,
          description: description,
          completedDates: edit ? existingHabit.completedDates : []
        };
        
        const url = edit ? `http://localhost:8080/habits/${id}` : "http://localhost:8080/habits"

        const response = await fetch(url, {
          method: edit ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newHabit)
        });
      
        const savedHabit = await response.json();
      
        if (edit) {
          setHabits(prev =>
            prev.map(h => (h.id === savedHabit.id ? savedHabit : h))
          );
        } else {
          setHabits(prev => [...prev, savedHabit]);
        }
    
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
