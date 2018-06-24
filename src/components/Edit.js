import React from 'react';
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import {editExpense, removeExpense} from "../actions/expenses";

const Edit = (props) => {
  // console.log(props.match.params.id);
  // console.log(props.location);

  return (
    <div>
      <ExpenseForm
        onSubmit={(updates) => {
          props.dispatch(editExpense(props.match.params.id, updates));
          props.history.push("/");
        }}
        expense={props.location.state.expense}
        name="Update Expense"
      />
      <button onClick={() => {
        props.dispatch(removeExpense({id: props.match.params.id}));
        props.history.push("/");
      }}>Remove</button>
    </div>
  );
};


export default connect()(Edit);