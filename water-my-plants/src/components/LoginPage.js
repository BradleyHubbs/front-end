import React from 'react';

export default function LoginPage(props) {
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
                <button id='submitBtn'>Sign In</button>
            </form>
        </div>
    )
};