/**
 * Created by A.C. on 5/23/18.
 */

import {createStore} from 'redux';

const incrementCount = (count=1) => ({
  type: 'INCREMENT',
  incrementBy: count
});

// Reducers
const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const delta = typeof(action.incrementBy) === 'number' ? action.incrementBy : 0;
      return {
        count: state.count + delta
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});
store.dispatch({
  type: 'INCREMENT'
});
store.dispatch({
  type: 'DECREMENT'
});
store.dispatch({
  type: 'RESET'
});

store.dispatch(incrementCount(5));

