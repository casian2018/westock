"use client";

import { signOut } from "next-auth/react";
import { useState, useEffect } from "react";

export default function DeleteAccount() {
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  const handleDeleteAccount = async () => {
    try {
      const response = await fetch('/api/deleteAccount', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete account');
      }

      setIsDeleted(true);
      await signOut({ redirect: true, callbackUrl: "/" }); // Log the user out and redirect
    } catch (error) {
      console.error('Failed to delete account:', error);
      // Handle error appropriately
    }
  };

  useEffect(() => {
    if (isConfirmed) {
      handleDeleteAccount();
    }
  }, [isConfirmed]);

  if (isDeleted) {
    return <h1>Account deleted. Redirecting...</h1>;
  }

  if (!isConfirmed) {
    return (
      <div>
        <h1>Are you sure you want to delete your account?</h1>
        <button onClick={() => setIsConfirmed(true)}>Yes, delete my account</button>
        <button onClick={() => window.location.href = '/settings'}>No, go back</button>
      </div>
    );
  }

  return <h1>Deleting your account...</h1>;
}
