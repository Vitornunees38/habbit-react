import './HabitGrid.css'

const HabitGrid = ({ habit }) => {

    
    const generateDays = (numDays = 365) => {
        const days = []
        const today = new Date();
        
        for (let i = 0; i < numDays; i++) {
            const date = new Date();
            date.setDate(today.getDate() - i)
            
            days.push(date.toISOString().split("T")[0])
        }
        
        return days.reverse()
        
    }
    
    const days = generateDays(365);
    const completedSet = new Set(habit.completedDates);
    
    return (
      <div className="grid">
        {days.map((day) => {
          const isCompleted = completedSet.has(day);
  
          return (
            <div
              key={day}
              className={`cell ${isCompleted ? "done" : ""}`}
              title={day}
            />
          );
        })}
      </div>
    );
  };

export default HabitGrid