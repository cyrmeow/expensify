import React from 'react';
import {Link} from 'react-router-dom';

const NoMatch = () => (
  <div>
    404 Not Found <Link to="/">Go home</Link>
  </div>
);

export default NoMatch;