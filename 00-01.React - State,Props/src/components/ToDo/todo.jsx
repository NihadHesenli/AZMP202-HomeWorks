import { IoMdAdd } from "react-icons/io";
import "./todo.css"

const ToDo = () => {
  return (
    <>
    <form>
        <input type="text" id="todo" placeholder="Write a note"/>
        <button>
        <IoMdAdd className="add-icon"/>
        </button>
        <span>Clear All</span>
    </form>
    </>
  )
}

export default ToDo