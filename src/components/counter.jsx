import React, { useState } from 'react'

const Counter = (props) => {
  // console.log(props)
  // const [value, setValue] = useState(props.value)
  const { value } = props

  const formatValue = () => {
    return value === 0 ? 'empty' : value
  }
  //изменение цвета фона, если value меняется
  const getBageClasses = () => {
    let classes = 'badge m-2 '
    classes += value === 0 ? 'text-bg-warning' : 'text-bg-primary'
    return classes
  }

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBageClasses()}>{formatValue()}</span>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onIncrement(props.id)}>
        +
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onDecrement(props.id)}>
        -
      </button>
      <button
        className="btn btn-danger btm-sm m-2"
        onClick={() => props.onDelete(props.id)}>
        delete
      </button>
    </div>
  )
}

export default Counter
