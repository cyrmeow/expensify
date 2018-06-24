import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

const AddExpense = (props) => (
  <div>
    <ExpenseForm
      onSubmit={(expense) => {
        console.log(expense);
        props.dispatch(addExpense(expense));
        props.history.push('/')
      }}
      name="Add Expense"
    />
  </div>
);



export default connect()(AddExpense);