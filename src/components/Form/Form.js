import { useState } from "react"

const Form = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleClick = () => {

  }

  return (
    <form name="item" >
      <input name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" />
      <input name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description" />
      <button onClick={(e) => handleClick(e)} />
    </form>
  )
}

export default Form