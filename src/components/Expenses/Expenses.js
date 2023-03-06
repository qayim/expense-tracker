import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';

const Expenses = (props) => {
    const expense= props.items.map(items => 
        <ExpenseItem
            title={items.title}
            amount={items.amount}
            date={items.date}
        />
    );

  return (
    <Card className="expenses">
        {expense}
    </Card>
  );
}

export default Expenses;