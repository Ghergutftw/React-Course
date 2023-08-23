import "./Expenses.css";
import Card from "../UI/Card.tsx";
import ExpensesFilter from "./Filter/ExpensesFilter.tsx";
import {useState} from "react";
import ExpensesList from "./ExpensesList/ExpensesList.tsx";
import ExpensesChart from "./ExpensesChart/ExpensesChart.tsx";


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
        <div>
            <Card className={"expenses"}>
                <ExpensesFilter onChangeFilter={filterChangeHandler} selectedYear={filteredYear}/>
                <ExpensesChart expenses={filteredExpenses} ></ExpensesChart>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;
