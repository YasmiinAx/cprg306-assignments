export default function Item( {props, onDelete} ) {
    const {id, name, quantity, category} = props;
    return (
        <li className="bg-slate-600 p-3 w-100 m-3 text-white mx-auto font-sans">
            <h2 className="text-2xl font-bold">{name}</h2>
            <div className="flex justify-between ">
                <p className="text-lg">Buy {quantity} in {category}</p>
                <button className="p-1 px-5 text-red-500 border border-red-500 rounded-xl" onClick={() => onDelete(id)}>Delete</button>
            </div>
        </li>
    );
}