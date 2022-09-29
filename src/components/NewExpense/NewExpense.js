import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  const saveExpenseDataHanlder = (enteredExpenseData) => {
    const expenseData={
        ...enteredExpenseData,
        id:Math.random().toString()
    };
    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHanlder} />
    </div>
  );
};

export default NewExpense;
