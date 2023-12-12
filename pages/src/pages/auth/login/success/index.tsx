// import { useRouter } from "next/router";

export default function Login() {
  // const router = useRouter();

  const logout = async () => {
    const res = await fetch("http://localhost:8000/v1/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    const result = await res.json();
    console.log(result);
  };

  const token = async () => {
    const res = await fetch("http://localhost:8000/v1/auth/token", {
      method: "GET",
      credentials: "include",
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <div>
      <button onClick={() => logout()}>test</button>
      <button onClick={() => token()}>test</button>
    </div>
  );
}
