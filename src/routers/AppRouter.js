import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AddExpense from '../components/AddExpense';
import Dashboard from '../components/Dashboard';
import Edit from '../components/Edit'
import Header from '../components/Header';
import Help from '../components/Help'
import NoMatch from '../components/NoMatch';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id" component={Edit}/>
        <Route path="/help" component={Help}/>
        <Route component={NoMatch} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;