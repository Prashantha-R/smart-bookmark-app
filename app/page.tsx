"use client";

import { supabase } from "@/lib/supabaseClient";

export default function Home() {

  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/dashboard"
      }
    });
  };

  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    
    <h1 className="text-4xl font-bold mb-6">
      Smart Bookmark App
    </h1>

    <button
      onClick={loginWithGoogle}
      className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
    >
      Login with Google
    </button>

  </div>
);
}