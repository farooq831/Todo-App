import React, { useState } from 'react';
import './Todo.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


const First = () => {
    const [todo, settodo] = useState(["farooq"]);
    const [input, setinput] = useState("");
    const [Delinput, setDelinput] = useState("");
    const [editIndex, setEditIndex] = useState(null); 
    const [editValue, setEditValue] = useState(""); 

    function ClickAdd() {
        if (input.trim() === "" || todo.includes(input)) return;
        settodo([...todo, input]);
        setinput(""); 
    }

    function ClickDel() {
        settodo(todo.filter((i) => i !== Delinput)); 
        setDelinput(""); 
    }

    function ClickEdit() {
        if (editIndex === null || editValue.trim() === "") return; 
        settodo(todo.map((item, index) => index === editIndex ? editValue : item)); 
        setEditValue(""); 
        setEditIndex(null); 
    }

    const startEdit = (index) => {
        setEditIndex(index);
        setEditValue(todo[index]);
    }

    return (
        <div className="todo-container">
            <h1 className="header">Todo List</h1>
            {todo.map((item, index) => (
                <div className="todo-item" key={index}>
                    <li>{item}</li>
                    <div className="buttons">
                        <button onClick={() => startEdit(index)} className="icon-button edit-button">
                            <i className="fas fa-edit"></i>
                        </button>
                        <button onClick={() => settodo(todo.filter((_, i) => i !== index))} className="icon-button delete-button">
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            ))}

            <div className="input-section">
                <label>Add Item in the List <br />
                    <input
                        type='text'
                        placeholder='Enter item to add'
                        value={input}
                        onChange={(e) => setinput(e.target.value)}
                        className="input-field"
                    />
                    <button onClick={ClickAdd} className="icon-button add-button">
                        <i className="fas fa-plus"></i>
                    </button>
                </label>
            </div>

            <div className="input-section">
                <label>Remove item from the list <br />
                    <input
                        type='text'
                        placeholder='Enter item to Delete'
                        value={Delinput}
                        onChange={(e) => setDelinput(e.target.value)}
                        className="input-field"
                    />
                    <button onClick={ClickDel} className="icon-button delete-button">
                        <i className="fas fa-trash"></i>
                    </button>
                </label>
            </div>

            <div className="input-section">
                <label>Edit Any item from the list <br />
                    <input
                        type='text'
                        placeholder='Enter new value'
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="input-field"
                    />
                    <button onClick={ClickEdit} className="icon-button update-button">
                        <i className="fas fa-check"></i>
                    </button>
                </label>
            </div>
        </div>
    );
}

export default First;
