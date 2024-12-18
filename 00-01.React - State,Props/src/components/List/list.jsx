import './list.css'
import { FaMinus } from "react-icons/fa";

const List = () => {
  return (
    <div className='card'>
      <div className='info'>
        <h2>Guitar practise at 8 a.m</h2>
      </div>
      <div className='action'><FaMinus /></div>
    </div>
  )
}

export default List