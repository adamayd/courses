// "use client"

// import React from 'react';
// import { logoutAction } from '../actions/auth';
// import { redirect, useRouter } from 'next/navigation';

// const LogoutButton = () => {
//     const router = useRouter();
//     const handleClick = async () => {
//         try {
//             await logoutAction();
//             // redirect happens in the server action
//             // This client-side redirect is a fallback
//             router.push("/login");
//             router.refresh();
//         } catch (error) {
//             console.log("Logout failed", error)
//         }
//     }
//     return <button onClick={handleClick}>LogoutButton</button>;
// }

// export default LogoutButton;