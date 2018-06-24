import React from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const defaultState = {
  description: '',
  note: '',
  amount: '',
  createdAt: new moment(),
  calendarFocused: false,
  error: ''
}
class ExpenseForm extends React.Component {
  state = this.props.expense ? {
    ...this.props.expense,
    createdAt: new moment(this.props.expense.createdAt),
    calendarFocused: false,
    error: ''
    } : defaultState;
  onDescriptionChangeHandler = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}));
  };
  onNoteChangeHandler = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}));
  };
  onAmountChangeHandler = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({amount}));
    }
  };
  onDateChangeHandler = (createdAt) => {
    this.setState(() => ({createdAt}));
  };
  onFocusChangeHandler = ({focused}) => {
    this.setState(() => ({calendarFocused: focused}));
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({error: ''}));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount) * 100,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <div>
        {!!this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChangeHandler}
          />
          <input
            type="number"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChangeHandler}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChangeHandler}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChangeHandler}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a memo for your expense (optional)"
            onChange={this.onNoteChangeHandler}
          >
          </textarea>
          <button>{this.props.name}</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;