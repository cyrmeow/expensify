import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {getVisibleExpenses} from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';


const store = configureStore();

store.dispatch(addExpense({
  description: 'water bill',
  note: '',
  amount: 50000,
  createdAt: 0
}));

store.dispatch(addExpense({
  description: 'gas bill',
  note: '',
  amount: 30000,
  createdAt: 1
}));

store.dispatch(addExpense({
  description: 'electric bill',
  note: '',
  amount: 25000,
  createdAt: 2
}));

// store.dispatch(setTextFilter('water'));


const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app-root'));
