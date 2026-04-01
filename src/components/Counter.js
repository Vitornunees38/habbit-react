import React from 'react'

const Counter = ({doneCount, totalCount}) => {
  return (
    <div>{doneCount}/{totalCount} habits concluded today!</div>
  )
}

export default Counter