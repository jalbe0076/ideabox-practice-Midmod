import { useState } from "react"

const Form = ({addItem}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleClick = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      title,
      description
    }
    setDescription('')
    setTitle('')

    addItem(newItem)
  }

  return (
    <form className="item-form" name="item" >
      <input name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" />
      <input name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description" />
      <button onClick={(e) => handleClick(e)}>SUBMIT!</button>
    </form>
  )
}

export default Form