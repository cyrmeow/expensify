import moment from 'moment';

// Get visible expenses
export const getVisibleExpenses  = (expenses, {text, sortBy, startDate, endDate}) => {
  const visibleExpenses = expenses.filter((expense) => {
    const startDateMatch = startDate ? startDate.isSameOrBefore(moment(expense.createdAt), 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(moment(expense.createdAt), 'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  });
  visibleExpenses.sort((a, b) => {
    if (sortBy === 'date') {
      return b.createdAt - a.createdAt;
    } else if (sortBy === 'amount') {
      return a.amount - b.amount;
    }
  });
  return visibleExpenses;
};

