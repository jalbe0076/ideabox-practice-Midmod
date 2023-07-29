import logo from './logo.svg';
import './App.css';
import { getItems } from './apiCalls';
import { useState, useEffect } from 'react';
import IdeaList from './components/IdeaList/IdeaList';

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>IDEA-BOX</h1>
      </header>
      <main>
        <IdeaList items={items} />
      </main>
    </div>
  );
}

export default App;
