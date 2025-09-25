export default function Item( {props} ) {
    const {name, quantity, category} = props;
    return (
        <li className="bg-slate-600 p-3 w-100 m-3 text-white mx-auto font-sans">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-lg">Buy {quantity} in {category}</p>
        </li>
    );
}