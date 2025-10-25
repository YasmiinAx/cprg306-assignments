"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    const cleanItemName = (name) => {
        const cleaned = name.split(",")[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();  
        return cleaned;
    };

    const handleItemSelect = async (id) => {    
        const selectedItem = items.find(item => item.id === id);
        if (!selectedItem) return;
        const cleanedName = cleanItemName(selectedItem.name);
        setSelectedItemName(cleanedName);
    };

    return (
    <main>
        <h1 className="text-2xl font-bold ml-80 font-sans mt-4">Shopping List + Meal Ideas</h1>
        
        <div className="flex justify-center gap-8 ml-80">
            <div className="flex flex-col">
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="flex-1">
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </div>
    </main>
    );
}   

