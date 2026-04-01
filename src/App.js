import './App.css';
import Habit from './components/Habit';
import {useState} from 'react'

function App() {

  let [habits, setHabits] = useState([
    {id:1, name: "Workout", done: false},
    {id:2, name: "Study", done: true},
    {id:3, name: "Drink water", done: false},
    {id:4, name: "Run 5km", done: false}
  ])

  const toggleDone = (id) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) => 
        habit.id === id ? {...habit, done: !habit.done} : habit
      ))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome back!</h1>

        <div>
        <ul className="no-bullets">
            {habits.map((habit) => (
                <li key={habit.id}>
                  <Habit habit={habit} toggle={toggleDone}/>
                </li>
            ))}
        </ul>
        <button>+ Add Habit</button>
    </div>

      </header>
    </div>
  );
}

export default App;
