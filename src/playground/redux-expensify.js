import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// Actions

// ADD EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createAt = 0
  } = {}
  ) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createAt
  }
});

// REMOVE EXPENSE
const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET TEXT FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT BY DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

// SORT BY AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

// SET START DATE
const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET END DATE
const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
});

// ...

// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};


// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses  = (expenses, {text, sortBy, startDate, endDate}) => {
  const visibleExpenses = expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  });
  visibleExpenses.sort((a, b) => {
    if (sortBy === 'date') {
      return a.date - b.date;
    } else if (sortBy === 'amount') {
      return a.amount - b.amount;
    }
  });
  return visibleExpenses;
};


// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});



const expense1 = store.dispatch(addExpense({description:'rent', amount: 150000}));

const expense2 = store.dispatch(addExpense({description:'coffee', amount: 300}));
//
// store.dispatch(removeExpense({id: expense1.expense.id}));
//
// store.dispatch(editExpense(expense2.expense.id, {amount: 500}));
//
// store.dispatch(setTextFilter('rent'));
//
store.dispatch(sortByAmount());
//
store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(150));


const demoState = {
  expenses: [{
    id: 'asdqrh',
    description: 'Jan Rent',
    note: 'final payment',
    amount: 54500,
    createAt: 0
  }],
  filters: {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

// console.log({
//   ...demoState
// });