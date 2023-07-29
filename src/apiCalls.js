export const getItems = async () => {
  const response = await fetch('http://localhost:3001/ideas')
  const data = await handleError(response)
  return data
}

export const postItem = async (newItem) => {
  const response = await fetch('http://localhost:3001/ideas', {
    method: 'POST',
    headers: {"Content-Type": "application/json"}, 
    body: JSON.stringify(newItem)
  })
  const data = await handleError(response);

  return data;
}

const handleError = (response) => {
  if(response.ok) {
    return response.json()
  } else {
    throw new Error(`HTTP Error: ${response.status}`)
  }
}