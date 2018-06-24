import {getVisibleExpenses} from "../../selectors/expenses";
import moment from 'moment';

const expenses = [
  {
    id: "1",
    description: "grocery",
    note: "",
    amount: 45000,
    createdAt: 0,
  }, {
    id: "2",
    description: "gas",
    note: "",
    amount: 30000,
    createdAt: moment(0).subtract(7, 'days').valueOf()
  }, {
    id: "3",
    description: "donut",
    note: "",
    amount: 2500,
    createdAt: moment(0).add(4, 'days').valueOf()
  }
];

test('should filter text value', () => {
  const filters = {
    text: 'o',
  };

  const visibleExpenses = getVisibleExpenses(expenses, filters);
  expect(visibleExpenses).toEqual([expenses[0], expenses[2]]);
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    startDate: moment(0)
  };
  const visibleExpenses = getVisibleExpenses(expenses, filters);
  expect(visibleExpenses).toEqual([expenses[0], expenses[2]]);
});

test ('should filter by endDate', () => {
  const filters = {
    text: '',
    endDate: moment(0)
  }
  const visibleExpenses = getVisibleExpenses(expenses, filters);
  expect(visibleExpenses).toEqual([expenses[0], expenses[1]]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
  };
  const visibileExpenses = getVisibleExpenses(expenses, filters);
  expect(visibileExpenses).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
  };
  const visibileExpenses = getVisibleExpenses(expenses, filters);
  expect(visibileExpenses).toEqual([expenses[2], expenses[1], expenses[0]]);
});