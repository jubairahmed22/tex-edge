"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ResetPasswordClient() {
  const router = useRouter();
  const params = useSearchParams();

  const [emailFromQuery, setEmailFromQuery] = useState(null);
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState("enterCode"); // enterCode or setPassword
  const [isLoading, setIsLoading] = useState(false);

  // Get email from query once client-side
  useEffect(() => {
    const email = params.get("email");
    if (!email) {
      router.replace("/signin"); // redirect if no email
    } else {
      setEmailFromQuery(email);
    }
  }, [params, router]);

  // Show loading state while checking email
  if (!emailFromQuery) {
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

  const verifyCode = async () => {
    if (!code) return alert("Enter the reset code");
    if (code.length !== 6) return alert("Enter a 6-digit code");

    setIsLoading(true);
    try {
      const res = await fetch(
        `http://localhost:50001/api/verify-reset-code`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: emailFromQuery, code }),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Invalid code");

      alert("Code verified! Now enter your new password");
      setStep("setPassword");
    } catch (err) {
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async () => {
    if (!code || !newPassword)
      return alert("All fields are required");

    if (newPassword.length < 6) 
      return alert("Password must be at least 6 characters");

    setIsLoading(true);
    try {
      const res = await fetch(
        `http://localhost:50001/api/reset-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: emailFromQuery, code, newPassword }),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to reset password");

      alert("Password reset successfully! You can now sign in.");
      router.push("/signin");
    } catch (err) {
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e, action) => {
    if (e.key === 'Enter') {
      action();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="card max-w-md w-full p-6 shadow rounded-lg bg-white">
        <h1 className="text-2xl font-bold mb-4 text-center">Reset Password</h1>

        <p className="mb-6 text-gray-700 text-center text-sm">
          Resetting password for <b>{emailFromQuery}</b>
        </p>

        {step === "enterCode" ? (
          <div className="space-y-4">
            <div>
              <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-1">
                Reset Code
              </label>
              <input
                id="code"
                type="text"
                placeholder="Enter 6-digit reset code"
                className="input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                onKeyPress={(e) => handleKeyPress(e, verifyCode)}
                maxLength={6}
                disabled={isLoading}
              />
            </div>
            <button 
              className="btn btn-primary w-full py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              onClick={verifyCode}
              disabled={isLoading || code.length !== 6}
            >
              {isLoading ? "Verifying..." : "Verify Code"}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter new password"
                className="input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, resetPassword)}
                disabled={isLoading}
              />
            </div>
            <button 
              className="btn btn-primary w-full py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              onClick={resetPassword}
              disabled={isLoading || !newPassword}
            >
              {isLoading ? "Resetting..." : "Reset Password"}
            </button>
          </div>
        )}

        <div className="mt-4 text-center">
          <button
            onClick={() => router.push("/signin")}
            className="text-sm text-blue-600 hover:text-blue-500"
          >
            Back to Sign In
          </button>
        </div>
      </div>
    </div>
  );
}