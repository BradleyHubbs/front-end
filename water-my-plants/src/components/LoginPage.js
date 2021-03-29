import React, { useState } from 'react';
// import axios from 'axios';
import styled from 'styled-components';

const StyledForm = styled



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




    return(
        <div className='login-form'>
            <h1>water my plants</h1>
            <form>
                <label htmlFor='username'>
                    Username:
                </label>
                <input
                    name='username'
                    type='text'
                />
                <br/>
                <br/>
                <label htmlFor='password'>
                    Password:
                </label>
                <input
                    name='password'
                    type='password'
                />
                <br/>
                <br/>
                <label htmlFor='password'>
                    Phone Number:
                </label>
                <input
                    name='phoneNumber'
                    type='text'
                />
                <br/>
                <br/>
                <button id='submitBtn'>Sign In</button>
            </form>
        </div>
    )
};