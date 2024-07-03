import Link from "next/link";
import Login from "./components/Login";

export default function Home() {
  return (
    <div className="min-w-screen min-h-screen flex flex-row">
      <Link href="/" />
      <div className="w-1/2 h-100 flex flex-col justify-center items-center gap-3">
        <h1 className="font-bold text-6xl">M-Connect</h1>
        <p className="text-xl">
          Empower Your Journey: Connect with Mentors Who Inspire
        </p>
      </div>
      <div className="w-1/2 h-100 flex justify-center items-center">
        <Login />
      </div>
    </div>
  );
}
