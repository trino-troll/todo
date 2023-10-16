import { useState } from 'react'
import './App.css'

interface User {
  id: number,
  text: string,
  completed: boolean,
}

function App() {
  const [list, setList] = useState([
    {id: 1, text: 'Задача 1', completed: false},
    {id: 2, text: 'Задача 2', completed: false},
  ]);

  const handleStyle = (id: number) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {...item, completed: !item.completed}
        }
        return item;
      })
    )
  }
  const [input, setinput] = useState('');

  const addTask = () => {
    const item: User = {id: Date.now(), text: input, completed: false };
    setList([...list, item])
  }

  return (
    <>
      <div className="main">
        <h1>Задачи</h1>
        <ul>
          {list.map((item)=> (
            <li key={item.id}
                onClick={() => handleStyle(item.id)}
                style={{textDecoration: item.completed ? 'line-through':'none'}}
            >{item.text}</li>
          ))}
        </ul>
        <input  type="text" 
                placeholder='Введи задачу'
                onChange={(e) => setinput(e.currentTarget.value)} />
        <button onClick={addTask}>Добавить</button>
      </div>
    </>
  )
}

export default App
