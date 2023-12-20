import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    token();
  });

  const token = async () => {
    const response = await fetch(`${url}/v1/auth/token`, {
      credentials: "include",
    });

    const res = await response.json();
    setAccessToken(res.token);
  };

  const url = "http://localhost:8000";
  const generateClientSecret = async () => {
    const response = await fetch(`${url}/v1/client-keys/generate`, {
      method: "POST",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const res = await response.json();

    console.log(res);
  };

  const logout = async () => {
    const response = await fetch(`${url}/v1/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    const res = await response.json();

    console.log(res);
  };

  const router = useRouter();
  return (
    <>
      <button
        onClick={() => router.push("http://localhost:8000/v1/auth/google")}
      >
        google
      </button>
      <button
        onClick={() => router.push("http://localhost:8000/v1/auth/github")}
      >
        github
      </button>
      <button onClick={() => logout()}>logout</button>
      <button onClick={() => generateClientSecret()}>
        generate client keys
      </button>
    </>
  );
}
