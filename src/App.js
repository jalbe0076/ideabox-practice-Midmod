import logo from './logo.svg';
import './App.css';
import { getItems } from './apiCalls';
import { useState, useEffect } from 'react';
import IdeaList from './components/IdeaList/IdeaList';
import Form from './components/Form/Form';

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    (async() => {
      try {
        const data = await getItems()
        console.log(data)
        setItems(data)
      } catch (error) {
        console.log(error.message)
      }
    })()    
  }, [])

  const addItem = (newItem) => {
    setItems(prevItems => [... prevItems, newItem])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>IDEA-BOX</h1>
      </header>
      <main>
        <div className='form-container'>
          <Form addItem={addItem} />
        </div>
        <div className='idea-container'>
          <IdeaList items={items} />
        </div>
      </main>
    </div>
  );
}

export default App;
