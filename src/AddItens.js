import { useState } from "react";

const Additens = () => {
    const [value, setValue] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const todoitens = { value };

        fetch('http://localhost:8000/todoitens', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(todoitens)
        }).then(() => {
            console.log('new blog added');
        })
    }
    
    return (  
        <div className="create">
            <form onSubmit={handleSubmit}>
            <label>New Item:</label>
                <input
                    type="text"
                    maxLength="70"
                    value={value}
                    required
                    onChange={(e) => setValue(e.target.value)}
                />
                <button>Add item</button>
            </form>
        </div>
    );
}
 
export default Additens;