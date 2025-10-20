// src/app/signin/SigninClient.js
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function SigninClient() {
  const params = useSearchParams();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Example of using searchParams in signin
  const redirect = params.get("redirect");
  const message = params.get("message");

  useEffect(() => {
    if (message) {
      alert(message);
    }
  }, [message]);

  const handleSignin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        router.push(redirect || "/dashboard");
      } else {
        const error = await res.json();
        alert(error.message);
      }
    } catch (error) {
      alert("Sign in failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card max-w-md mx-auto mt-10 p-6 shadow rounded-lg bg-white">
      <h1 className="text-xl font-bold mb-4 text-center">Sign In</h1>
      <form onSubmit={handleSignin}>
        <input
          type="email"
          className="input w-full mb-3 px-4 py-2 border rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="input w-full mb-4 px-4 py-2 border rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}