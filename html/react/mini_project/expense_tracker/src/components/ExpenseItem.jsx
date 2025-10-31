import { useState } from "react";
import "./ExpenseItem.css"
function ExpenseItem({ expense, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false)
    const [editedExpenseName, setEditedExpenseName] = useState(expense.description)
    const [editedAmount, setEditedAmount] = useState(expense.amount)
    const [editedCategory, setEditedCategory] = useState(expense.category)


    const handleSave =() => {
        onEdit(expense.id, {
                description: editedExpenseName,
                amount: parseFloat(editedAmount),
                category: editedCategory
            }
        )

        setIsEditing(false)
    }

    
    return(        <div className="expense-item-container">
        {isEditing? 
        <div className="expense-item editing">
        <input
        type="text"
        value={editedExpenseName} onChange={(e)=> setEditedExpenseName(e.target.value)}></input>
        
        <input
        type="number"
        value={editedAmount}
        onChange={(e)=> setEditedAmount(e.target.value)}></input>

        <select value={editedCategory} onChange={(e)=> {setEditedCategory(e.target.value)}}>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Health">Health</option>
            <option value="Entertainment">Entertainment</option>
        </select>
        <div className="actions">
        <button className="save" onClick={handleSave}> Save</button>
        <button className="cancel" onClick={(e)=> setIsEditing(false)}>Cancel</button>
        </div>
        </div>

        :

        <div className="expense-item">
            <span>Expense: {expense.description}     </span>
            <span>Amount: ₦{expense.amount}</span>
            <span>Category: {expense.category}</span>
            <div className="actions">
            <button className="edit" onClick={()=> setIsEditing(true)}>Edit</button>
            <button className="delete" onClick={()=> onDelete(expense.id)}>Delete</button>
        </div>
        </div>}
        
    </div>
    );
}

export default ExpenseItem;