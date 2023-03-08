import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useEffect, useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("check app.js",expense);
    
    setExpenses((prevExpenses) => { 
      return [...prevExpenses, expense];
    });
    console.log("In App.js");
    console.log("Expenses "+ JSON.stringify(expense));
    
    //findings on the error: it does not work(does not display correct title only, date & price is correct) 
    //when replace/put new data to the 1st position in array but works if i put data on the last/new position in array
    //potential problem: 
    //   react uses shallow comparison which makes it ignore the new title change 
    //   although in console it prints the new data/array inserted
    //DUMMY_EXPENSES.unshift(expense); 
     //doesn't work properly, if i save code with new code then the data updates but by default it won't update
    //  setExpenses((prevExpenses) => { 
    //   return [expense, ...prevExpenses];
    // });
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
