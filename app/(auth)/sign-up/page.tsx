"use client"
import Link from "next/link";
import SignUpForm from "./signup-form";
import { useState } from "react";

function SignUp() {
  const [active, setActive] = useState<'login' | 'register'>('login');

  return (
    <>
     <header className="mb-10 text-center max-w-[400px]">
        <h1 className="mb-3 font-semibold lg:text-xl">Welcome to our Website!</h1>
          {/* ========== */}
          <div className="w-[280px] bg-[#49BBBD99] rounded-full mx-auto py-2 px-10 flex justify-around gap-4">
      {/* Login Button */}
      <button
        onClick={() => setActive('login')}
        className= {`w-[200px] text-white font-semibold text-md rounded-full py-1 px-6 transition-all duration-300
          hover:bg-cyan-300`}
        >
        <Link href="/sign-in" className="block w-full">Login</Link>
      </button>

      {/* Register Button */}
      <button
        onClick={() => setActive('register')}
        className={`w-[200px] text-white font-semibold text-md rounded-full py-1 px-6 transition-all duration-300 ${
          active === 'register' ? 'bg-[#49BBBD99] shadow-md scale-110' : 'bg-[#49BBBD99]'
        } hover:bg-cyan-300`}
      >
        <Link href="/sign-up" className="block w-full">Register</Link>
      </button>
    </div>


        {/* <p>Login with your details to get started now.</p> */}
      </header>

      <main>
        <SignUpForm />
      </main>

      {/* <footer className="mt-10 text-center">
        <p>
          Already have an account?{" "}
          <Link href="/sign-in" className="font-bold">
            Sign in
          </Link>
        </p>
      </footer> */}
    </>
  );
}

export default SignUp;
