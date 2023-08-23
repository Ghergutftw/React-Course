import './ExpenseItem.css'
import ExpenseDate from "../ExpenseDate/ExpenseDate.tsx";
import Card from "../../UI/Card.tsx";

const ExpenseItem = (props: { key: number, title: string, amount: number, date: Date }) => {


    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;
