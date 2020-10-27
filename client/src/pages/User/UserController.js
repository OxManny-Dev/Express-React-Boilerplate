import React from 'react';
import {Switch, Route} from 'react-router-dom';
// Will use the same route for viewing a single user
// For deleting and updating
// both of those can go to /users/user/:id
export const UserController = () => {
  return (
    <Switch>
      <Route path='/users/create'>
        <h1>I AM CREATE A USER COMPONENT</h1>
      </Route>
      <Route path='/users/user/:userId'>
        <h1>I AM VIEW SINGLE USER COMPONENT</h1>
      </Route>
      <Route path='/users'>
        <h1>I AM VIEW ALL USERS COMPONENT</h1>
      </Route>
    </Switch>
  );
};
