import React from 'react'
import "./Counter.css"

const Counter = ({doneCount, totalCount}) => {

  let list_empty = totalCount === 0;

  return (
    <div className="progress">
    
      {!list_empty && <p>{doneCount}/{totalCount} habits concluded today!</p>}
    
    </div>
  )
}

export default Counter