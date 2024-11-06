"use client";
import { useState } from "react";
import ItemList from "./item-list.js";
import itemsData from "./items.json";
import NewItem from "./new-item.js"; 
 
export default function Page() {
  const [items, setItems] = useState(itemsData);
  function handleAddedItem(item) {
    setItems([...items, item]);
  }
  return (
    <main>
      <h1 className="font-extrabold text-4xl p-6 text-orange-600 ">
        Shopping List
      </h1>
      <header>
      <NewItem onAddItem={handleAddedItem} />
      <ItemList items={items} />
      </header>
    </main>
  );
}


