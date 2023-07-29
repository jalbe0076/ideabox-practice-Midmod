const IdeaCard = ({item}) => {
  const {title, id, description} = item;

  console.log('title', title)
  
  return (
    <article  className="card" >
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  )
}

export default IdeaCard