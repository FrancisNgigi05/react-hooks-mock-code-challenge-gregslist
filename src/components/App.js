import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { API_URL } from "./api";

function App() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then((data) => setItems(data))
  }, [])

  function addItem(itemObj) {
    setItems([itemObj, ...items])
  }

  function handleDelete(id) {
    const updatedItems = items.filter((item) => item.id !== id)
    setItems(updatedItems)
  }
    // const filteredExpenses = expense.filter((exp) => exp.expense.toLowerCase().includes(searchTerm.toLowerCase()));
  const itemsToDisplay = items.filter((item) => item.description.toLowerCase().includes(searchTerm.toLowerCase()));
  // const sortedExpenses = [...filteredExpenses].sort((a,b) => a.category.localeCompare(b.category));
  
  const sortedLocation = [...itemsToDisplay].sort((a,b) => a.location.localeCompare(b.location))

  return (
    <div className="app">
      <Header searchTerm={searchTerm} onSearchTern={setSearchTerm} onAddItem={addItem}/>
      <ListingsContainer items={sortedLocation} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
