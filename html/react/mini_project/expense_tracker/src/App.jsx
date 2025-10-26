import React, { useState } from 'react'
import Header from './components/Header'
import AddExpenseForm from './components/AddExpenseForm'
import ExpenseList from './components/ExpenseList'
import Summary from './components/Summary'
import './App.css'

function App() {

  const [expenses, setExpenses] = useState([])

  const addExpense = (expense) => {
    setExpenses(prev => [...prev, expense])
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e)=> e.id !==id));
  }

  return(
    <div className='app-container'>
      <Header></Header>
      <AddExpenseForm onAddExpense={addExpense}></AddExpenseForm>
      <ExpenseList expenses={expenses} onDelete={deleteExpense}></ExpenseList>
      <Summary expenses={expenses}></Summary>
    </div>
  )

}

export default App
