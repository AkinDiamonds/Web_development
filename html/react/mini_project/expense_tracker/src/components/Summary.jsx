import "./Summary.css"
function Summary({ expenses }) {
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);

    return(
        <div className="summary">
            <h3>Total Spent: N{total.toFixed(2)}</h3>
        </div>
    );
}

export default Summary;