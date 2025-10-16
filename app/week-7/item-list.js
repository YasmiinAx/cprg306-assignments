"use client";
import Item from "./item";
import { useState } from "react";

export default function ItemList( {items, onDeleteItem} ) {
    const [sortBy, setSortBy] = useState("name");
    let itemsCopy = [...items];
    
    if (sortBy === "name") 
    {
        itemsCopy.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (sortBy === "category")
    {
        itemsCopy.sort((a, b) => a.category.localeCompare(b.category));
    }

    let groupedItems = null;
    let sortedCategories =[];
    if (sortBy === "group")
    {
        const group = itemsCopy.reduce((acc, item) => {
            const category = item.category;
        if (!acc.groups[category]) {
            acc.groups[category] = [];
            acc.categories.push(category);
        }
        acc.groups[category].push(item);
        return acc;
        }, { groups: {}, categories: [] });
        groupedItems = group.groups;
        sortedCategories = group.categories.sort();
    };
        
    return (
        <div>
            <div className="flex gap-5 justify-center pt-5 text-white font-bold">
                <button onClick={() => setSortBy("name")} className={`"border rounded-md h-20 w-30
                    ${sortBy === "name" ? "bg-amber-500" : "bg-gray-500"}`}> Sort By Name </button>
                <button onClick={() => setSortBy("category")} className={`"border rounded-md h-20 w-30
                    ${sortBy === "category" ? "bg-amber-500" : "bg-gray-500"}`}> Sort By Category </button>
                <button onClick={() => setSortBy("group")} className={`"border rounded-md h-20 w-30
                    ${sortBy === "group" ? "bg-amber-500" : "bg-gray-500"}`}> Group By Category</button>
            </div>

            <ul>
                { sortBy === "group" ? (
                    sortedCategories.map((category) => {
                        const sortedItems = groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
                        return (
                            <li key={category} className="mt-5 mb-6 bg-red-300 w-110 m-auto p-3 rounded-2xl">
                                <h3 className="capitalize text-xl font-bold ml-2">{category}</h3>
                                <ul>
                                    {sortedItems.map(item => (
                                        <Item 
                                        key={item.id} 
                                        id={item.id}
                                        name={item.name}
                                        quantity={item.quantity}
                                        category={item.category}
                                        onDelete={onDeleteItem}/>
                                    ))}
                                </ul>
                            </li>
                        );
                    })
                ) : (
                    itemsCopy.map((item) => (
                    <Item 
                    key={item.id} 
                    id={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                    onDelete={onDeleteItem}/>
                ))
            )}
            </ul>
        </div>  
    );
}