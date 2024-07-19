import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ITEMS_URL from "./url";
function App() {
  const [items, setItems] = useState([]);
  const [filterText, setFilterText] = useState("")

  const fetchingItems = () => {
    fetch(ITEMS_URL)
      .then((r) => r.json())
      .then((data) => setItems(data))
  }

  // console.log(items);

  const onDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems);
  }

  const itemsDisplayed = items.filter((item)=>item.description.toLowerCase().includes(filterText.toLocaleLowerCase()));

  useEffect(() => {
    fetchingItems();
  }, [])
  
  return (
    <div className="app">
      <Header items={itemsDisplayed} filterText={filterText} setFilterText={setFilterText}/>
      <ListingsContainer items={itemsDisplayed} onDelete={onDelete} />
    </div>
  );
}

export default App;
