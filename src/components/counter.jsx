import React, { useState } from 'react'

const Counter = (props) => {
  // console.log(props)
  const [value, setValue] = useState(props.value)

  const formatValue = () => {
    return value === 0 ? 'empty' : value
  }
  //изменение цвета фона, если value меняется
  const getBageClasses = () => {
    let classes = 'badge m-2 '
    classes += value === 0 ? 'text-bg-warning' : 'text-bg-primary'
    return classes
  }
  //увеличивает value
  const handleIncrement = () => {
    setValue((prevState) => prevState + 1)
  }
  //уменьшает value
  const handleDecrement = () => {
    setValue((prevState) => prevState - 1)
  }

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBageClasses()}>{formatValue()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>
        -
      </button>
    </div>
  )
}

export default Counter
