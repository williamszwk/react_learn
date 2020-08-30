import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Login from "./pages/Login/index";
import Admin from './pages/Admin/admin';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path="/" component={Admin}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
