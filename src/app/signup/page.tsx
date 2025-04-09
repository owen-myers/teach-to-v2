"use client";

import { useState } from "react";
import { createClient } from "../utils/supabase/client";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();

  const handleSignUp = async () => {
    if (!email) {
      setMessage("Please enter your email address");
      return;
    }

    setIsLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithOtp({ 
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/confirm`,
      },
    });

    if (error) {
      setMessage("There was a problem sending the sign-up link. Please try again.");
    } else {
      setMessage("Check your email for a secure sign-up link!");
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="font-lora text-3xl font-bold text-gray-900">
            Join TeachTo
          </h2>
          <p className="mt-2 font-karla text-gray-600">
            We'll send you a secure link to create your account instantly
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="font-karla w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition duration-200"
            />
          </div>

          <button
            onClick={handleSignUp}
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg font-karla text-white transition duration-200 button-animation
              ${isLoading 
                ? 'bg-violet-400 cursor-not-allowed' 
                : 'bg-violet-500 hover:bg-violet-600'}`}
          >
            {isLoading ? 'Sending link...' : 'Create account'}
          </button>

          {message && (
            <div className={`text-center font-karla text-sm ${
              message.includes('problem') ? 'text-red-600' : 'text-green-600'
            }`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 