"use client";

import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

export default function Login(props: Props) {
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

  let err = props.searchParams?.error;

  if (err === "CredentialsSignin") {
    err = "Invalid username or password";
  }

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
      {err && <p>{err}</p>}
    </div>
  );
}
