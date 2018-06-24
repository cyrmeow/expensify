import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={(e) => {
          this.props.dispatch(setTextFilter(e.target.value));
        }}/>
        <select value={this.props.filters.sortBy} onChange={(e) => {
          if (e.target.value === 'date') {
            this.props.dispatch(sortByDate());
          } else if (e.target.value === 'amount') {
            this.props.dispatch(sortByAmount());
          }
        }}>
          <option value="date">date</option>
          <option value="amount">amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="123"
          endDate={this.props.filters.endDate}
          endDateId="abc"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);



