// import './App.css';
import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import axios from 'axios';

function App() {

  // USER STATE



  // GET USERS
  const getUsers = () => {
    axios
    .get() // FROM ROUTE
    .then((res) => {
        // SET USER STATE
    })
    .catch(
      (err) => {
        console.log(err);
      }
    )
  };


  // POST USERS
  const postNewUser = {
    // axios
    // .post() // TO ROUTE
    // .then((res) => {
    //     // SET USER STATE
    // })
    // .catch(
    //   (err) => {
    //     console.log(err);
    //   }
    // )
  };


  return (
    <div className="App">
      <header className="App-header">
        <LoginPage />
      </header>
    </div>
  );
}

export default App;
