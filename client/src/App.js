import React from 'react';
import {Route} from 'react-router-dom';
import Navbar from './pages/Navbar';
import {UserController} from './pages/User';

function App() {
  return (
    <div>
      <Navbar/>
      <Route exact path='/'>
        <h1>Hello World</h1>
      </Route>
      <Route path='/users' component={UserController}/>
    </div>
  );
}

export default App;
