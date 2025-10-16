"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    }

    const handleDeleteItem = (id) => {
        setItems(items.filter((item) => item.id != id));
    }

    return (
    <main>
        <h1 className="text-4xl font-bold ml-140 font-sans mt-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem}/>
        <ItemList items={items} onDeleteItem={handleDeleteItem}/>
    </main>
    );
}