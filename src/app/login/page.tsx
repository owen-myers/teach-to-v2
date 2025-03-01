/*
import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  )
}
*/

"use client";
import { useState } from "react";
import { createClient } from "../utils/supabase/client";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const supabase = createClient(); // Call function to create client

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOtp({ 
        email,
        options: {
            emailRedirectTo: `${window.location.origin}/auth/confirm`, // Redirect after clicking OTP
          },
     });
    if (error) {
      setMessage("Error sending OTP");
    } else {
      setMessage("Check your email for a sign-in link!");
    }
  };

  return (
    <div className="text-center">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2"
      />
      <button onClick={handleSignIn} className="ml-2 bg-blue-500 text-white p-2 rounded">
        Send OTP
      </button>
      <p>{message}</p>
    </div>
  );
}


