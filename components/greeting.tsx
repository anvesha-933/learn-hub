"use client";

import { useEffect, useState } from "react";

export default function greeting() {
const [name, setName] = useState("Student");

useEffect(() => {
const storedName = localStorage.getItem("userName");

if (storedName) {
  setName(storedName);
}


}, []);

return ( <h1 className="text-3xl font-bold text-white mb-2">
Welcome back, {name}! 👋 </h1>
);
}
