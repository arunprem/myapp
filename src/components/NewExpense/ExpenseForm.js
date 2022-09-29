import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnterdTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInputs, setUserInput] = useState({
  //   enteredTile: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnterdTitle(event.target.value);
    // setUserInput({
    //   ...userInputs,
    //   enteredTile: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTile: event.target.value,
    //   };
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value,
    //   };
    // });
  };
  const dateChangeHanlder = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value,
    //   };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(userInputs);
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    setEnterdTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHanlder}
          />
        </div>
      </div>
      <div className="new_expense__actions">
        <button type="submit">Add Expence</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
