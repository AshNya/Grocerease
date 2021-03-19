import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Home from './components/Home/Home';
import PrivateRoute from './utils/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AlertComponent from './components/AlertComponent/AlertComponent';  
import PurchaseHistory from './components/PurchaseHistory/PurchaseHistory';

function App() {
  // title = curr. state val, update func. 
  const [title, updateTitle] = useState(null);
  // errorMessage = curr. state val, update func.
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Router>
    <div className="App">
      {/* prevent header on login + register pages */}
      {window.location.pathname.split("/").pop() === '' ||
       window.location.pathname.split("/").pop() === 'login' ||
       window.location.pathname.split("/").pop() === 'register' ? null : <Header/>}
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/register">
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/purchasehistory">
              <PurchaseHistory showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/home">
            <Home showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
          </Switch>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
        </div>
    </div>
    </Router>
  );
}

export default App;
