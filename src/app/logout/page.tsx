"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import { useEffect } from "react";

export default function Logout() {
    const router = useRouter(); // Initialize useRouter

    const handleLogout = async () => {
        await signOut({ redirect: false }); // Ensure no redirect by next-auth
        router.push('/login'); // Redirect to login page after signout
    };

    useEffect(() => {
        handleLogout();
    }, []); // Empty dependency array ensures this runs once on mount

    return null; // No need for a button since the logout happens immediately
}
