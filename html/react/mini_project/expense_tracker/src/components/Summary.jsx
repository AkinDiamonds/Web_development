import "./Summary.css"
function Summary({ expenses, selectedCategory }) {
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    const count = expenses.length;
    const highest = expenses.length > 0
        ? Math.max(...expenses.map((e) => Number(e.amount)))
        : 0;

    return (
        <section className="summary">
            <h2>Summary</h2>
            <div className="summary-grid">
                <div className="summary-card">
                    <p className="label">Category:</p>
                    <p className="value">{selectedCategory}</p>
                </div>

                <div className="summary-card">
                    <p className="label">Total Expenses:
                    </p>
                    <p>{count}</p>
                </div>
                <div className="summary-card">
                    <p className="label">
                        Total Amount:
                    </p>
                    <p className="value">₦{total.toLocaleString()}</p>
                </div>
                <div className="summary-card">
                    <p className="label">
                        Highest Single Expense:
                    </p>
                    <p className="value">₦{highest.toLocaleString()}</p>
                </div>
            </div>

        </section>
    );
}

export default Summary;