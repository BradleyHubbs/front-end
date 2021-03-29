import React, { useState } from 'react';
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

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('This is event: ', e.target);
    };

    const onChange = (e) => {
        const { name, value} = e.target;
        console.log(name, value);
    };

    return(
        <div className='login-container'>
            <h1>water my plants</h1>
            {/* <StyledForm> */}

                <form className="form-container" onSubmit={ onSubmit }>
                    <label htmlFor='username'>
                        Username:
                    </label>
                    <input
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