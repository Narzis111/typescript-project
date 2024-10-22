"use client";

import Link from "next/link";
import { signIn } from "./action";
import TextInput from "../components/text-input";
import { useFormState } from "react-dom";
import { FormState } from "./definition";
import SubmitButton from "../components/submit-button";

const initialState: FormState = {
  email: [],
  password: [],
  message: [],
};

export default function LoginForm() {
  const [state, formAction] = useFormState(signIn, initialState);

  return (
    <form action={formAction} className="max-w-[400px]">
      {state.message && state.message?.length > 0 && (
        <p aria-live="polite" className="mb-4 text-center text-sm text-red-500">
          {state.message[0]}
        </p>
      )}

      <div className="flex flex-col gap-y-6">
        <TextInput
          label="Email"
          name="Email"
          placeholder=" "
          icon="./icons/message.svg"
          type="text"
          errors={state}
        />

        <TextInput
          label="Password"
          name="Password"
          type="password"
          icon="./icons/password-check.svg"
          placeholder=" "
          errors={state}
        />
      </div>

      <div className="mt-3 flex justify-between text-sm">
        <Link href="/forgot-password">
        {/* <Link href="/forgot-password" className="text-[#0077B6]"> */}
          Forgot Password?
        </Link>
        <div className="flex gap-x-1">
          <input type="checkbox" id="recall" />
          <label htmlFor="recall">Remember Me</label>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <SubmitButton pendingText="Signing in..." text="Login" />
      </div>
    </form>
  );
}
