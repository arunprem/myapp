import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItems.css";

function ExpenseItems(props) {

  const [title,setTitle]= useState(props.title);
  console.log("ExpenseItems created evaluvatio log");
  const clickHandler = () => {
    
    console.log("clicked");
   setTitle("Updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItems;
