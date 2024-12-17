
import { useState } from 'react'
import './App.css'
import List from './components/List/list'
import ToDo from './components/ToDo/todo'

function App() {
  const [lists , setLists] = useState([])
  return (
    <>
     <ToDo lists={lists} setLists={setLists}/>
     <br />
     <List lists={lists} setLists={setLists}/>
    </>
  )
}

export default App
