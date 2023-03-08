import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import {useState} from 'react'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: (Math.floor(Math.random()*1000)+4).toString(),
    };
    console.log("check new expense", expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  } 

  

  return (
    <div className="new-expense">
        {isEditing === false && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing === true && (
            <>
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>
            </>
            )
        }
        
    </div>
  );
};

export default NewExpense;
