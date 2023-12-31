// @ts-ignore
import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const submitHandler = (event: any) => {

        event.preventDefault()

        const expenseData: { title: string, amount: number, date: Date } = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }


    const titleChangeHandler = (event: any) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event: any) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event: any) => {
        setEnteredDate(event.target.value);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input
                            type="text"
                            value={enteredTitle}
                            onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input
                            type="number"
                            min={"0.01"}
                            step={"0.01"}
                            value={enteredAmount}
                            onChange={amountChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input
                            type="date"
                            min={"2019-01-01"}
                            max={"2022-12-31"}
                            value={enteredDate}
                            onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="expense-form__actions">
                    <button type={"submit"}>
                        Add Expense
                    </button>
                    <button type={"button"} onClick={props.onCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );

}


export default ExpenseForm;
