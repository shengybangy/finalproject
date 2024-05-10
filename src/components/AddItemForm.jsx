import { useState } from 'react';

function AddItemForm({items, setItems}) {
    
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false);
    const [category, setCategory] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        // Create a new item object
        const newItem = {
            name: name,
            description: description,
            completed: completed,
            category: category
        };
        
        fetch('http://localhost:5001/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        }).then(response => {
            if (!response.ok) {
                alert('Failed to add item.');
                return;
            }

            response.json().then(data => {
                setItems([...items, data]);
            })
        }); 

        // Clear the form inputs
        setName("");
        setDescription("");
        setCompleted(false);
        setCategory("");
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="title"
                    type="text" 
                    placeholder="Add item title" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input
                    name="description"
                    type="text" 
                    placeholder="Add item description" 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                />
                <div className="checkbox-container">
                    <label htmlFor="completed">Completed?</label>
                    <input
                        id="completed"
                        name="completed"
                        type="checkbox" 
                        checked={completed}
                        onChange={e => setCompleted(e.target.checked)}
                    />
                </div>
                <select
                    name="category"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    required
                >
                    <option value="">Choose an option</option>
                    <option value="Personal">Personal</option>
                    <option value="Work">Work</option>
                </select>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddItemForm;
