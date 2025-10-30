"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList( {items, onItemSelect} ) {
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
            <div className="flex gap-5 justify-center pt-5 pr-5">
                <h2 className="text-gray-500 text-lg pt-1 font-medium">Sort by:</h2>
                <button onClick={() => setSortBy("name")} className={`"border rounded-md h-8 w-18
                    ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-100 border border-gray-200"}`}>Name</button>
                <button onClick={() => setSortBy("category")} className={`"border rounded-md h-8 w-21
                    ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-100 border border-gray-200"}`}>Category </button>
                <button onClick={() => setSortBy("group")} className={`"border rounded-md h-8 w-24
                    ${sortBy === "group" ? "bg-blue-500 text-white" : "bg-gray-100 border border-gray-200"}`}>Categories</button>
            </div>

            <ul>
                { sortBy === "group" ? (
                    sortedCategories.map((category) => {
                        const sortedItems = groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
                        return (
                            <li key={category} className="mt-5">
                                <h3 className="capitalize text-xl font-bold">{category}</h3>
                                <ul>
                                    {sortedItems.map(item => (
                                        <Item 
                                        key={item.id} 
                                        id={item.id}
                                        name={item.name}
                                        quantity={item.quantity}
                                        category={item.category}
                                        onSelect={onItemSelect}/>
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
                    onSelect={onItemSelect}/>
                ))
            )}
            </ul>
        </div>  
    );
}