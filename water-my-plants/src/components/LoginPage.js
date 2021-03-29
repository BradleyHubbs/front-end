import React, { useState } from 'react';

export default function LoginPage(props) {
    return(
        <div className='login-form'>
            <h1>water my plants</h1>
            <form>
                <label>
                    Username:
                    <input
                        name='username'
                        type='text'
                    />
                </label>
                <br/>
                <br/>
                <label>
                    Password:
                    <input
                        name='password'
                        type='text'
                    />
                </label>
            </form>
        </div>
    )
}