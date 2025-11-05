"use client";

import React from 'react';
import { loginAction } from '../actions/auth';

const LoginForm = () => {
    return (
        <form action={loginAction}>
            <div>
                <label>Email</label>
                <input type="email" name="email" placeholder="Enter your email" required />
                <label>Password</label>
                <input type="password" name="password" placeholder="Enter your password" required />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm;