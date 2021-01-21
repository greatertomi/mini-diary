import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import './App.scss';
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
// import Dashboard from "./components/diary/Dashboard";

const App = () => (
  <BrowserRouter>
    <div>
      <Route path='/' exact component={Register} />
      <Route path='/login' exact component={Login} />
      <Route path='/register' exact component={Register} />
    </div>
  </BrowserRouter>
);

export default App;
