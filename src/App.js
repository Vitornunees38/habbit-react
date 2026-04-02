import './App.css';
import Habit from './components/Habit';
import {useState, useEffect} from 'react'
import Counter from './components/Counter';
import CreateHabit from './pages/CreateHabit';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

  let [doneCount, setDoneCount] = useState(0)
  let [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    const done = habits.filter(h => h.done).length;
    const total = habits.length;
  
    setDoneCount(done);
    setTotalCount(total);
  }, [habits]);

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const toggleDone = (id) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) => 
        habit.id === id ? {...habit, done: !habit.done} : habit
      ))
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

  const handleDelete = (habitToDelete) => {

    setHabits((prevHabits) =>
      prevHabits.filter((habit) => habit.id !== habitToDelete.id)
    );

  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome back!</h1>

        <Counter doneCount = {doneCount} totalCount={totalCount}/>

        <div>
        <BrowserRouter>
        <Routes>
          <Route path="/create" element={<CreateHabit/>}/>
        </Routes>
        <ul className="no-bullets">
            {habits.map((habit) => (
                <li key={habit.id}>
                  <Habit habit={habit} toggle={toggleDone} deleteHabit={handleDelete}/>
                </li>
            ))}
        </ul>
        </BrowserRouter>
        <form onSubmit = {handleSubmit}>
          <label>
            New Habit:
            <input type="text" name="name" />
          </label>
          
          <input type="submit" value="+ Add Habit"/>
        </form>
    </div>

      </header>
    </div>
  );
}

export default App;
