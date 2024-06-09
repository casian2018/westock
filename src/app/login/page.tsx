"use client";

import { signIn } from "next-auth/react";
import { FormEvent } from "react";

export default function Login() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    await signIn("credentials", {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
      redirect: true,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input name="username" type="text" />
        </label>
        <label>
          Password
          <input name="password" type="password" />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}
