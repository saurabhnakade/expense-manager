import React,{useState} from 'react'
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear,setFilteredYear]=useState('2021')

  const filterChangeHandler=(year)=>{
    setFilteredYear(year)
  }

  const filteredList=props.items
      .filter(o=>o.date.getFullYear().toString()==filteredYear)


  return (
    <Card className="expenses">
      <ExpensesFilter year={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesList items={filteredList}/>
    </Card>
  );
};

export default Expenses;
