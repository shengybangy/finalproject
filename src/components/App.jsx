import React, { useState, useEffect } from 'react';

import Header from './Header';
import AddItemForm from './AddItemForm';
import ItemList from './ItemList';

function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null); 
  
  useEffect(() => {
    fetch('http://localhost:5001/items')
      .then(response => response.json())
      .then(data => {
        setItems(data);
      })
      .catch(error => {
        setError(error); // Set error state if request fails
      });
  }, []);


  return (
    <div className="App">
      <Header />
      <h3>What Do You Have to Do Today?</h3>
      {error && <p>Error: {error.message}</p>} 
      <AddItemForm 
        items={items}
        setItems={setItems}
      />
      <ItemList 
        items={items} 
        setItems={setItems}
      />
    </div>
  );
}

export default App;
