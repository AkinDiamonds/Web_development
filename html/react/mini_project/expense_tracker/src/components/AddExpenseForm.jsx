import { useState } from "react";
import "./AddExpenseForm.css"

function AddExpenseForm({ onAddExpense }) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("Food")

    const handleSubmit = e => {
        e.preventDefault();
        if (description.trim() === "" || amount <=0) {
            return
        }
        const expense = {
            id: Date.now(),
            description,
            amount: parseFloat(amount),
            category: selectedCategory
        }
        onAddExpense(expense)
        setDescription("")
        setAmount("")
        setSelectedCategory("Food")
    }

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value)
    }

    return(
        <form className="add-expense-form" onSubmit={handleSubmit}>
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Add expense description here..." />
            <input type="number" value={amount} onChange={e=> setAmount(e.target.value)} placeholder="Add expense amount here..." />
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="Food">Food</option>
                <option value="Health">Health</option>
                <option value="Transport">Transport</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Others">Others</option>
            </select>
            <button type="submit">Add Expense</button>
        </form>
    );
}

export default AddExpenseForm;