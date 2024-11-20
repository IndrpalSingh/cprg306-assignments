
"use client";
import { useState } from "react";
import MealIdeas from "./meal-ideas.js";
import ItemList from "./item-list.js";
import itemsData from "./items.json";
import NewItem from "./new-item.js";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleItemSelect(item) {
    const cleanedItemName = item.name
      .split(",")[0]
      .replace(/[\u{1F600}-\u{1F6FF}]/gu, "")
      .trim();
    setSelectedItemName(cleanedItemName);
  }

  return (
    <main className="p-4" style={{ backgroundColor: "#333", color: "#f0f0f0", margin: "20px", padding: "20px", height: "100vh" }}>
      <h1 className="font-extrabold text-4xl p-3 pl-5 textwhite">
        Shopping List
      </h1>

      <header>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </header>
    <div className="flex-1 p-2 overflow-auto" style={{ margin: "10px", padding: "10px" }}>
        <MealIdeas ingredient={selectedItemName} />
      </div>

    </main>
  );
}