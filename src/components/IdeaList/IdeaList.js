import IdeaCard from "../IdeaCard/IdeaCard"

const IdeaList = ({items}) => {
  const list = items.map(item => {
    return <IdeaCard key={item.id} item={item} />
  })

  console.log('list', list)

  return(
    <>
      {list}
    </>
  )
}

export default IdeaList