import { useState } from "react";
import "./AddExpenseForm.css"

function AddExpenseForm({ onAddExpense }) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        if (description.trim() === "" || amount <=0) {
            return
        }
        const expense = {
            id: Date.now(),
            description,
            amount: parseFloat(amount)
        }
        onAddExpense(expense)
        setDescription("")
        setAmount("")
    }

    return(
        <form className="add-expense-form" onSubmit={handleSubmit}>
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Add expense description here..." />
            <input type="number" value={amount} onChange={e=> setAmount(e.target.value)} placeholder="Add expense amount here..." />
            <button type="submit">Add Expense</button>
        </form>
    );
}

export default AddExpenseForm;