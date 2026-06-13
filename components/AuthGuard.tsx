"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard() {
const router = useRouter();

useEffect(() => {
const user = localStorage.getItem("userName");

if (!user) {
  router.push("/login");
}


}, [router]);

return null;
}
