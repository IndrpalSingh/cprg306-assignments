import ItemList from "./item-list.js";
export default function Page() {
  return (
    <main>
      <h1 className="font-extrabold text-4xl p-6 text-orange-600 ">
        Shopping List
      </h1>
      <header>
        <ItemList />
      </header>
    </main>
  );
}

