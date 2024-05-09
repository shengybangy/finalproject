import React from 'react';
import ItemCard from "./ItemCard"; // Adjusted import path

function ItemList({ items, setItems }) {
    return (
        <div>
            <ul className="ItemList">
                {items.map(item => (
                    <ItemCard 
                        item={item} 
                        key={item._id} 
                        setItems={setItems}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
