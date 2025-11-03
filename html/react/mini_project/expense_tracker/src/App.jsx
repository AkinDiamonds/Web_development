import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import AddExpenseForm from './components/AddExpenseForm'
import ExpenseList from './components/ExpenseList'
import Summary from './components/Summary'
import './App.css'

function App() {

  const [expenses, setExpenses] = useState([])

  const [selectedCategory, setSelectedCategory] = useState("All")

  const [showForm, setShowForm] = useState(false)

  const [quote, setQuote] = useState("")

  // function to set fetch quote from api
  useEffect (()=>{
    fetchQuote()
  }, [])

  async function fetchQuote(){
    try{
      const response = await fetch("https://api.quotable.io/random")
    const data = await response.json()
    setQuote(data.content)
    }
    catch(error){
      console.log("Error fetching quotes", error)
    }
  }

  const addExpense = (expense) => {
    setExpenses(prev => [...prev, expense])
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  }

  // editFunction
  const editExpense = (id, newData) => {
    setExpenses(expenses.map((exp) =>
      exp.id === id ? { ...exp, ...newData } : exp
    ))
  }

  // filter
  const filteredExpenses =
    selectedCategory === "All"
      ? expenses
      : expenses.filter((e) => e.category === selectedCategory);


  return (
    <div className='app-container'>
      <Header></Header>
      <div className='top-controls'>
        <AddExpenseForm onAddExpense={addExpense}></AddExpenseForm>
        <div className="filter-container">
          {["All", "Food", "Health", "Transport", "Entertainment", "Others"].map((category) => (
    <button
      key={category}
      onClick={() => setSelectedCategory(category)}
      className={`category-btn ${selectedCategory === category ? "active" : ""}`}
    >
      {category}
    </button>
          ))}
        </div>
      </div>
      
      <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} onEdit={editExpense}></ExpenseList>

      <Summary expenses={filteredExpenses} selectedCategory={selectedCategory}></Summary>
    </div>
  )

}

export default App
