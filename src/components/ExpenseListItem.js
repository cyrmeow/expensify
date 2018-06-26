import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

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
    <p>
      {numeral(amount / 100).format('$0,0.00')}
      -
      {moment(createdAt).format('MMM DD, YYYY')}
      </p>
  </div>
);


// export default connect()(ExpenseListItem);
export default ExpenseListItem;

// id: uuid(),
//   description,
//   note,
//   amount,
//   createdAt