export default function Item( {id, name, quantity, category, onSelect} ) {
    return (
        <li className="border-1 rounded-md p-2 w-100 m-3 mx-auto font-sans cursor-pointer" onClick={() => onSelect(id)}>
            <div className="text-lg">
                <h2>{name}</h2>
                <p>Quantity: {quantity}</p>
                <p className="capitalize">Category: {category}</p>
            </div>
        </li>
    );
}