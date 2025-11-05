import Link from 'next/link';
import React from 'react';
import LogoutButton from './LogoutButton';
import { getSession } from '../_lib/session';

const Navbar = async () => {
    const session = await getSession();
    return (
        <nav>
            <div>
                <Link href="/">Simple Auth PoC</Link>
                <div>
                    {session ? (
                        <>
                            <Link href="/contact">Contacts</Link>
                            <LogoutButton />
                        </>
                    ) : (
                        <>
                            <Link href="/login">Login</Link>
                            <Link href="/register">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;