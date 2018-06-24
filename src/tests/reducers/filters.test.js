import filtersReducer from '../../reducers/filters';
import moment from "moment/moment";


const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual(filtersReducerDefaultState);
});