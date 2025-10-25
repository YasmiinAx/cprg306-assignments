export default function Item( {id, name, quantity, category, onSelect} ) {
    return (
        <li className="bg-slate-600 p-3 w-100 m-3 text-white mx-auto font-sans cursor-pointer" onClick={() => onSelect(id)}>
            <h2 className="text-2xl font-bold">{name}</h2>
            <div className="flex justify-between ">
                <p className="text-lg">Buy {quantity} in {category}</p>
            </div>
        </li>
    );
}