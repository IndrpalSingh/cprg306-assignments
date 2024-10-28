"use client";
import { useState } from "react";
import Item from "./item.js";

export default function ItemList({items}) {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...items];
  if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }
  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <main
      style={{
        backgroundColor: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}

    >
      <section style={{ marginBottom: "20px" }}>
        <h2 className="font-extrabold text-2xl text-white mb-4">Sort by:</h2>
        <button
          className="font-extrabold bg-blue-500 text-white hover:cursor-pointer py-2 px-4 rounded-md mr-2 hover:bg-blue-700 transition-all duration-300"
          onClick={() => setSortBy("name")}
          style={{ marginRight: "5px", padding: "10px 20px" }}
        >
          Name
        </button>
        <button
          className="font-extrabold bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-300 m-auto"
          onClick={() => setSortBy("category")}
          style={{ marginLeft: "5px", padding: "10px 20px" }}
        >
          Category
        </button>
      </section>
      <ul
        

      >
        {sortedItems.map((item) => (
          <li className="text-slate-900 border-2 border-black solid  border-centre"
            key={item.id}
            style={{
              marginBottom: "10px",
              transition: "all 0.3s ease-in-out",
              width: "80%",
            }}
          >
            <div
              style={{
                border: "2px solid white",
                
              }}
             
            >
              <Item {...item} />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}