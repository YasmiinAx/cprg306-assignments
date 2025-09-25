"use client";
import { useState } from "react"; 
export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

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

    return (
        <div className="border flex w-50 h-20 justify-center items-center text-2xl m-auto mt-10">
            <h1 className="bg-white w-12 h-10 border rounded font-bold flex text-center justify-center pt-1">{quantity}</h1>
            <button onClick={increment} className={`text-white font-bold w-10 h-10 m-3 rounded 
                ${quantity == 20 ? 'bg-gray-300 cursor-not-allowed hover:bg-gray-400' : 'bg-blue-400 hover:bg-blue-600'}`}>+</button>
            <button onClick={decrement} className={`text-white font-bold w-10 h-10 rounded 
                ${quantity == 1 ? 'bg-gray-300 cursor-not-allowed hover:bg-gray-400' : 'bg-blue-400 hover:bg-blue-600'}`}>-</button>
        </div>
    );
}