import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseItem={
            ...enteredExpenseData,
            id:Math.random().toString()
        }

        props.onAddExpense(expenseItem)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
    
}

export default NewExpense