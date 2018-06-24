import React from 'react';
// import {connect} from 'react-redux';
// import {removeExpense} from '../actions/expenses';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({dispatch, id, note, description, amount, createdAt}) => (
  <div>
    <h3><Link
      to={{
        pathname: "/edit/" + id,
        state: {
          expense: {
            id,
            description,
            note,
            amount,
            createdAt,
          }
        }
      }}
    >{description}</Link></h3>
    <p>{amount} - {createdAt}</p>
    {/*<button onClick={() => {*/}
      {/*// console.log(id);*/}
      {/*dispatch(removeExpense({id}));*/}
    {/*}}>delete</button>*/}
  </div>
);


// export default connect()(ExpenseListItem);
export default ExpenseListItem;

// id: uuid(),
//   description,
//   note,
//   amount,
//   createdAt