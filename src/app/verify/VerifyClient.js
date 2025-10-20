"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function VerifyClient() {
  const params = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const userId = params.get("userId");
  const email = params.get("email");

  const [code, setCode] = useState("");
  const [cooldown, setCooldown] = useState(0);

  // Redirect if no params
  useEffect(() => {
    if (!userId || !email) {
      router.replace("/signin");
    } else {
      setIsLoading(false);
    }
  }, [userId, email, router]);

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="card max-w-md mx-auto mt-10 p-6 shadow rounded-lg bg-white">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
            <div className="h-10 bg-gray-200 rounded w-full mb-3"></div>
            <div className="h-10 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  // ... rest of your component remains the same
  const verify = async () => {
    if (code.length !== 6) return alert("Enter the 6-digit code");

    const res = await fetch(
      `http://localhost:50001/api/verify-email-code`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, code }),
      }
    );

    if (!res.ok) {
      const err = await res.json().catch(() => ({ message: "Error" }));
      alert(err.message);
      return;
    }

    alert("Email verified, now sign in");
    router.push("/signin");
  };

  const resend = async () => {
    await fetch(`http://localhost:50001/api/resend-verification`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });
    setCooldown(30);
  };

  return (
    <div className="card max-w-md mx-auto mt-10 p-6 shadow rounded-lg bg-white">
      <h1 className="text-xl font-bold mb-2 text-center">Verify Email</h1>
      <p className="mb-4 text-gray-700 text-center">
        We sent a code to <b>{email}</b>
      </p>
      <input
        className="input w-full mb-4 px-4 py-2 border rounded"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="123456"
        maxLength={6}
      />
      <button
        className="btn btn-primary w-full mb-3"
        onClick={verify}
        disabled={code.length !== 6}
      >
        Verify
      </button>
      <button
        className="btn btn-outline w-full"
        onClick={resend}
        disabled={cooldown > 0}
      >
        {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend code"}
      </button>
    </div>
  );
}