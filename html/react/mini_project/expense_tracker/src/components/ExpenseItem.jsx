import "./ExpenseItem.css"
function ExpenseItem({ expense, onDelete }) {
    return(
        <div className="expense-item">
            <span>{expense.description}     </span>
            <span>  Amount: {expense.amount}</span>
            <button onClick={()=> onDelete(expense.id)}>Delete</button>
        </div>
    );
}

export default ExpenseItem;