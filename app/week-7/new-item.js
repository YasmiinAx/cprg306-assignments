"use client";
import { useState } from "react"; 
export default function NewItem( {onAddItem} ) {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = Math.floor(Math.random() * 10000);
        const newItem = {
            id: Math.floor(Math.random() * 10000),
            name,
            quantity,
            category,
        };
        onAddItem(newItem);
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <form onSubmit ={handleSubmit} className="flex justify-center items-center flex-col m-auto border w-90 pt-5 pb-5 mt-5">
            <input type="text" id="name" placeholder="Item Name" required value={name} onChange={(event) => setName(event.target.value)}
            className="border rounded w-80 h-10 pl-2"></input>

            <div className="flex w-50 h-20 justify-center items-center text-2xl mr-42">
                <h1 className="bg-white w-12 h-10 border rounded font-bold flex text-center justify-center pt-1">{quantity}</h1>
                <button type="button" onClick={increment} className={`text-white font-bold w-10 h-10 m-3 rounded 
                    ${quantity == 20 ? 'bg-gray-300 cursor-not-allowed hover:bg-gray-400' : 'bg-blue-400 hover:bg-blue-600'}`}>+</button>
                <button type="button" onClick={decrement} className={`text-white font-bold w-10 h-10 rounded 
                    ${quantity == 1 ? 'bg-gray-300 cursor-not-allowed hover:bg-gray-400' : 'bg-blue-400 hover:bg-blue-600'}`}>-</button>
            </div>

            <select id="category" value={category} onChange={(event) => setCategory(event.target.value)}
                className="border border-gray-300 rounded w-32 h-10 ml-48 mb-4 -mt-15">
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

            <button type="submit" className="border rounded-lg w-80 h-10 text-white bg-blue-500">Add Item</button>
        </form>
    );
}