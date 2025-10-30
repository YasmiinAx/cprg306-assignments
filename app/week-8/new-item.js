"use client";

import { useState } from "react"; 
export default function NewItem( {onAddItem} ) {
    const [item, setItem] = useState({ id: null, name: "", quantity: 1, category: "produce" });

    const increment = () => {
        if (item.quantity < 20) {
            setItem({...item, quantity: item.quantity + 1});
        }
    };

    const decrement = () => {
        if (item.quantity > 1) {
            setItem({...item, quantity: item.quantity - 1});
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = Math.floor(Math.random() * 10000);
        onAddItem({ ...item, id });
        setItem({ id: null, name: "", quantity: 1, category: "produce" })
    };

    return (
        <form onSubmit ={handleSubmit} className="flex justify-center items-center flex-col border rounded-md w-100 pt-5 pb-5 mt-2">
            <input type="text" id="name" placeholder="Item Name" required value={item.name} onChange={(event) => setItem({ ...item, name: event.target.value })}
            className="border rounded w-90 h-10 pl-2"></input>

            <div className="flex w-50 h-20 justify-center items-center text-2xl mr-52">
                <h1 className="bg-white w-12 h-10 border rounded font-bold flex text-center justify-center pt-1">{item.quantity}</h1>
                <button type="button" onClick={increment} className={`text-white font-bold w-10 h-10 m-3 rounded 
                    ${item.quantity == 20 ? 'bg-gray-300 cursor-not-allowed hover:bg-gray-400' : 'bg-blue-400 hover:bg-blue-600'}`}>+</button>
                <button type="button" onClick={decrement} className={`text-white font-bold w-10 h-10 rounded 
                    ${item.quantity == 1 ? 'bg-gray-300 cursor-not-allowed hover:bg-gray-400' : 'bg-blue-400 hover:bg-blue-600'}`}>-</button>
            </div>

            <select id="category" value={item.category} onChange={(event) => setItem({ ...item, category: event.target.value })}
                className="border border-gray-300 rounded w-42 h-10 ml-48 mb-4 -mt-15">
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen foods">Frozen Foods</option>
                <option value="canned goods">Canned Goods</option>
                <option value="dry goods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
            </select>

            <button type="submit" className="border rounded-lg w-90 h-10 text-white bg-blue-500">Add Item</button>
        </form>
    );
}