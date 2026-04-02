import React from 'react'
import "./Counter.css"

const Counter = ({doneCount, totalCount}) => {
  return (
    <div className="progress">{doneCount}/{totalCount} habits concluded today!</div>
  )
}

export default Counter