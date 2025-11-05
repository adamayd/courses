import React from 'react';
import styles from "./page.module.css";
import LoginForm from '@/app/_components/LoginForm';
import Link from 'next/link';

const LoginPage = () => {
    return (
    <div className={styles.login}>
        <h1>Login</h1>
        <LoginForm />
        <p>Don't have an account? <Link href="/register">Register</Link></p>
    </div>
    );
}

export default LoginPage;