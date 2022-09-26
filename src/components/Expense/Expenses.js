import ExpenseItems from "./ExpenseItems";
import './Expenses.css'
import Card from "../UI/Card";
function Expenses(props){
   return(
    <Card className="expenses">
    <ExpenseItems
    title={props.expenses[0].title}
    date={props.expenses[0].date}
    amount={props.expenses[0].amount}
  />
  <ExpenseItems
    title={props.expenses[1].title}
    date={props.expenses[1].date}
    amount={props.expenses[1].amount}
  />
  <ExpenseItems
    title={props.expenses[2].title}
    date={props.expenses[2].date}
    amount={props.expenses[2].amount}
  />
  <ExpenseItems
    title={props.expenses[3].title}
    date={props.expenses[3].date}
    amount={props.expenses[3].amount}
  />
  </Card>
   ); 
}

export default Expenses;