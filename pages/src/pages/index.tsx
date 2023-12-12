import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => router.push("http://localhost:8000/v1/auth/google")}
      >
        test
      </button>
      <button
        onClick={() => router.push("http://localhost:8000/v1/auth/github")}
      >
        test
      </button>
    </>
  );
}
