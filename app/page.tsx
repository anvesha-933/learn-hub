"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
const [name, setName] = useState("");
const router = useRouter();

const handleLogin = () => {
if (!name.trim()) return;

localStorage.setItem("userName", name);
router.push("/dashboard");

};

return ( 
<main className="min-h-screen flex items-center justify-center bg-slate-900"> <div className="bg-slate-800 p-8 rounded-2xl w-full max-w-md"> <h1 className="text-2xl font-bold text-white mb-6">
Welcome to LearnHub </h1>

    <input
      type="text"
      placeholder="Enter your name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full p-3 rounded-lg bg-slate-700 text-white mb-4"
    />

    <button
      onClick={handleLogin}
      className="w-full bg-blue-600 text-white p-3 rounded-lg"
    >
      Continue
    </button>
  </div>
</main>


);
}

