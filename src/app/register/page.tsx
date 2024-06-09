"use client";

import { signIn } from "next-auth/react";
import register from "../api/auth/register";
import { FormEvent, use, useState } from "react";
import { redirect } from "next/dist/server/api-utils";

export default function Register() {
  const [error, setError] = useState<string | null>(null);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (!fullName || !email || !username || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (username.length < 4) {
      setError("Username must be at least 4 characters.");
      return;
    }

    setError(null);

    const res = await register(fullName, email, username, password);

    if (res) {
      setError(res);
      return;
    }

    await signIn("credentials", {
      username,
      password,
      redirect: true,
      callbackUrl: "/dashboard",
    });
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Full Name" name="fullName" />
        <input type="email" placeholder="Email" name="email" />
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
        />
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
