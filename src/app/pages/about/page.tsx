"use client";

import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();
  function handleLogin() {
    router.replace("login");
  }
  return (
    <div>
      <p>about page</p>
      <div>
        <button onClick={() => handleLogin()}>LOGIN</button>
      </div>
    </div>
  );
}
