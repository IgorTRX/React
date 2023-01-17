import React, { useState } from 'react'
import Counter from './counter'

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: 'Ненужная вещь' },
    { id: 1, value: 4, name: 'Ложка' },
    { id: 2, value: 0, name: 'Вилка' },
    { id: 3, value: 0, name: 'Тарелка' },
    { id: 4, value: 0, name: 'Набор минималиста' },
  ]
  const [counters, setCounters] = useState(initialState)
  //удаляет count
  const handleDelete = (id) => {
    const newCounters = counters.filter((count) => count.id !== id)
    setCounters(newCounters)
  }
  //увеличивает value
  const handleIncrement = (id) => {
    const newCounters = counters.map((count) =>
      count.id === id ? { ...count, value: count.value + 1 } : count
    )
    setCounters(newCounters)
  }
  //уменьшает value
  const handleDecrement = (id) => {
    const newCounters = counters.map((count) =>
      count.id === id ? { ...count, value: count.value - 1 } : count
    )
    setCounters(newCounters)
  }
  //сброс counters
  const handleReset = () => {
    setCounters(initialState)
  }

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}

      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  )
}

export default CountersList
