import "./NewExpense.css";

const ExpenseAdd = (props) => {

  return (
    <div className="new-expense">
      <div className="new-expense__control">
        <button onClick={props.onClicking}>Add Expense</button>
      </div>
    </div>
  );
};

export default ExpenseAdd;
