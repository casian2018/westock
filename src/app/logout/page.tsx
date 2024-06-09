"use client";

import { signOut } from "next-auth/react";
import { useEffect } from "react";

export default function Logout() {
  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/" }); // Ensure no redirect by next-auth
  };

  useEffect(() => {
    handleLogout();
  }, []); // Empty dependency array ensures this runs once on mount

  return <h1>Logging out ...</h1>; // No need for a button since the logout happens immediately
}
