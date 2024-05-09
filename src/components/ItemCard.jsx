import React from 'react';

function ItemCard({ item, setItems }) {

    function handleDelete() {
        console.log(`Deleting item with id: ${item._id}`);

        fetch(`http://localhost:5001/items/${item._id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete item.');
            }
            return response.json();
        })
        .then(() => {
            setItems(prevItems => prevItems.filter(i => i._id !== item._id));
        })
        .catch(error => {
            console.error(error);
        });
    }

    return (
        <li className = "ItemCard" style={{ listStyle: 'none'}}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>{item.completed ? "Completed" : "Not Completed"}</p>
            <p>{item.category}</p>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
}

export default ItemCard;
