import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink exact={true} to="/" activeClassName="is-active">Home</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    {/*<NavLink to="/edit" activeClassName="is-active">Edit</NavLink>*/}
  </header>
);

export default Header;