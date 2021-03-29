import React, { useState } from 'react';
import schema from '../validation/loginSchema';
import * as yup from 'yup';
// import axios from 'axios';
// import styled from 'styled-components';

// const StyledButton = styled.button`
//     padding: 6px 10px;
//     margin: 5px;
//     border: none;
//     border-radius: 3px;
//     color: white;
// `

// const SubmitButton = styled.button`
//     padding: 6px 10px;
//     margin: 5px;
//     border: none;
//     border-radius: 3px;
//     color: white;
// `;

// const StyledForm = styled.div`
//     border: 1px solid red;
// `;

export default function LoginPage(props) {

  // INITIAL FORM VALUES - Do I need to add all properties or just ones needed for login-page?
  const initialFormValues = {
      username: "",
      password: "",
      phoneNumber: ""
  };

  const initialFormErrors = {
      username: "",
      password: "",
      phoneNumber: ""
  };

  // ADD STATE HERE
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const inputChange = (name, value) => {
    console.log('Test: ', name, value);
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors, [name]: ""
        });
      })
      .catch((err) => {
        // setFormErrors({
        //   ...formErrors,
        //   [name]: err.formErrors[0]
        // })
        console.log(err,typeof formErrors);
      });
      setFormValues({
        ...formValues,
        [name]: value
      })
      console.log(formErrors);
  };

  const formSubmit = () => {};

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('This is event: ', e.target);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    inputChange(name, value);
  };

  // SHOULD POSTNEWUSER LOGIC BE IN THIS COMPONENT?

  return(
    <div className='login-container'>
      <h1>water my plants</h1>
      {/* <StyledForm> */}
        {/* CONFUSED WHY ADDING VALUES  */}
        <form className="form-container" onSubmit={ onSubmit }>
          <label htmlFor='username'>
            Username:
          </label>
          <input
              // value={formValues.username}
              name='username'
              type='text'
              onChange={onChange}
          />
          <br/>
          <br/>
          <label htmlFor='password'>
              Password:
          </label>
          <input
              // value={formValues.password}
              name='password'
              type='password'
              onChange={onChange}
          />
          <br/>
          <br/>
          <label htmlFor='password'>
              Phone Number:
          </label>
          <input
              // value={formValues.phoneNumber}
              name='phoneNumber'
              type='text'
              onChange={onChange}
          />
          <br/>
          <br/>

          <button id='submitBtn'>Sign In</button>
        </form>
      {/* </StyledForm> */}
    </div>
  )
};