import {setEndDate, setStartDate} from "../../actions/filters";

test('should setup set start date action object', () => {
  const action = setStartDate(123123);
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: 123123
  })
});